/**
 * Chess Board Component — Chess Academy
 * Pure HTML/CSS/JS, no dependencies.
 *
 * API:
 *   new ChessBoard(containerId, options)
 *   new ChessSequence(containerId, positions)
 */

(() => {
  'use strict';

  // ── Constants ──────────────────────────────────────────────────────

  const PIECE_UNICODE = {
    K: '\u2654', Q: '\u2655', R: '\u2656', B: '\u2657', N: '\u2658', P: '\u2659',
    k: '\u265A', q: '\u265B', r: '\u265C', b: '\u265D', n: '\u265E', p: '\u265F',
  };

  const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const RANKS = ['8', '7', '6', '5', '4', '3', '2', '1'];

  const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

  const HIGHLIGHT_COLORS = ['green', 'red', 'yellow', 'blue'];

  const DEFAULT_ARROW_COLORS = {
    green:  'rgba(34, 197, 94, 0.75)',
    red:    'rgba(239, 68, 68, 0.75)',
    yellow: 'rgba(250, 204, 21, 0.75)',
    blue:   'rgba(59, 130, 246, 0.75)',
    orange: 'rgba(249, 115, 22, 0.75)',
  };

  // ── Helpers ────────────────────────────────────────────────────────

  /**
   * Parse the piece-placement part of a FEN string into an 8x8 array.
   * board[rank][file] where rank 0 = rank 8 (top), file 0 = a-file.
   */
  function parseFEN(fen) {
    const placement = (fen || START_FEN).split(' ')[0];
    const rows = placement.split('/');
    const board = [];

    for (let r = 0; r < 8; r++) {
      const row = [];
      const chars = rows[r] || '';
      for (let i = 0; i < chars.length; i++) {
        const ch = chars[i];
        if (ch >= '1' && ch <= '8') {
          for (let e = 0; e < parseInt(ch, 10); e++) row.push(null);
        } else {
          row.push(ch);
        }
      }
      // Pad if needed (defensive)
      while (row.length < 8) row.push(null);
      board.push(row);
    }
    return board;
  }

  /**
   * Convert algebraic square (e.g. "e4") to {rank, file} indices
   * where rank 0 = top of board display (rank 8), file 0 = a-file.
   */
  function squareToIndices(sq) {
    const file = sq.charCodeAt(0) - 97; // a=0
    const rank = 8 - parseInt(sq[1], 10); // 8->0, 1->7
    return { rank, file };
  }

  function isLightSquare(rank, file) {
    return (rank + file) % 2 === 0;
  }

  // ── ChessBoard ─────────────────────────────────────────────────────

  class ChessBoard {
    /**
     * @param {string} containerId - DOM element id
     * @param {object} [options]
     * @param {string} [options.fen] - FEN string (default: starting position)
     * @param {Array}  [options.highlights] - [{square, color}]
     * @param {Array}  [options.arrows] - [{from, to, color}]
     * @param {boolean}[options.showCoords] - show coordinates (default: true)
     * @param {boolean}[options.flipped] - show black at bottom
     */
    constructor(containerId, options = {}) {
      this._containerId = containerId;
      this._container = document.getElementById(containerId);
      if (!this._container) {
        throw new Error(`ChessBoard: element #${containerId} not found`);
      }

      this._fen = options.fen || START_FEN;
      this._showCoords = options.showCoords !== false;
      this._flipped = !!options.flipped;
      this._highlights = new Map(); // square -> color
      this._arrows = []; // {from, to, color}
      this._board = parseFEN(this._fen);

      this._buildDOM();
      this._render();

      // Apply initial highlights and arrows
      if (Array.isArray(options.highlights)) {
        for (const h of options.highlights) {
          this._highlights.set(h.square, h.color || 'green');
        }
      }
      if (Array.isArray(options.arrows)) {
        this._arrows = options.arrows.map(a => ({
          from: a.from,
          to: a.to,
          color: a.color || 'green',
        }));
      }

      this._applyHighlights();
      this._renderArrows();

      // Resize observer for responsive piece sizing
      this._resizeObserver = new ResizeObserver(() => this._updatePieceSize());
      this._resizeObserver.observe(this._boardContainer);
    }

    // ── Public API ───────────────────────────────────────────────────

    setPosition(fen) {
      this._fen = fen || START_FEN;
      this._board = parseFEN(this._fen);
      this._render();
      this._applyHighlights();
      this._renderArrows();
    }

    highlight(squares, color = 'green') {
      if (typeof squares === 'string') squares = [squares];
      for (const sq of squares) {
        this._highlights.set(sq, color);
      }
      this._applyHighlights();
    }

    clearHighlights() {
      this._highlights.clear();
      this._applyHighlights();
    }

    drawArrow(from, to, color = 'green') {
      this._arrows.push({ from, to, color });
      this._renderArrows();
    }

    clearArrows() {
      this._arrows = [];
      this._renderArrows();
    }

    flip() {
      this._flipped = !this._flipped;
      this._render();
      this._applyHighlights();
      this._renderArrows();
    }

    destroy() {
      if (this._resizeObserver) {
        this._resizeObserver.disconnect();
        this._resizeObserver = null;
      }
      if (this._wrapper && this._wrapper.parentNode) {
        this._wrapper.parentNode.removeChild(this._wrapper);
      }
      this._container = null;
    }

    // ── DOM Construction ─────────────────────────────────────────────

    _buildDOM() {
      this._wrapper = document.createElement('div');
      this._wrapper.className = 'chess-board-wrapper';

      this._boardContainer = document.createElement('div');
      this._boardContainer.className = 'chess-board-container';

      this._grid = document.createElement('div');
      this._grid.className = 'chess-board-grid';

      // Create 64 square elements
      this._squareEls = [];
      for (let r = 0; r < 8; r++) {
        for (let f = 0; f < 8; f++) {
          const sq = document.createElement('div');
          sq.className = 'chess-square';
          this._grid.appendChild(sq);
          this._squareEls.push(sq);
        }
      }

      // SVG overlay for arrows
      this._arrowSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this._arrowSvg.setAttribute('class', 'chess-arrow-svg');
      this._arrowSvg.setAttribute('viewBox', '0 0 800 800');
      this._arrowSvg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

      // Arrow marker definitions
      this._arrowDefs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      this._arrowSvg.appendChild(this._arrowDefs);

      this._boardContainer.appendChild(this._grid);
      this._boardContainer.appendChild(this._arrowSvg);
      this._wrapper.appendChild(this._boardContainer);
      this._container.appendChild(this._wrapper);
    }

    // ── Rendering ────────────────────────────────────────────────────

    _render() {
      for (let displayR = 0; displayR < 8; displayR++) {
        for (let displayF = 0; displayF < 8; displayF++) {
          const boardR = this._flipped ? 7 - displayR : displayR;
          const boardF = this._flipped ? 7 - displayF : displayF;

          const idx = displayR * 8 + displayF;
          const sq = this._squareEls[idx];
          const light = isLightSquare(boardR, boardF);

          // Store board coordinates on element for lookups
          sq.dataset.rank = boardR;
          sq.dataset.file = boardF;
          sq.dataset.square = FILES[boardF] + RANKS[boardR];

          // Reset classes
          sq.className = 'chess-square ' + (light ? 'chess-square--light' : 'chess-square--dark');

          // Clear contents
          sq.innerHTML = '';

          // Piece
          const piece = this._board[boardR][boardF];
          if (piece) {
            const pieceEl = document.createElement('span');
            pieceEl.className = 'chess-piece ' + (piece === piece.toUpperCase() ? 'chess-piece--white' : 'chess-piece--black');
            pieceEl.textContent = PIECE_UNICODE[piece];
            sq.appendChild(pieceEl);
          }

          // Coordinates
          if (this._showCoords) {
            const colorClass = light ? 'chess-coord--on-light' : 'chess-coord--on-dark';

            // File label on bottom row
            if (displayR === 7) {
              const fileLabel = document.createElement('span');
              fileLabel.className = `chess-coord chess-coord--file ${colorClass}`;
              fileLabel.textContent = FILES[boardF];
              sq.appendChild(fileLabel);
            }

            // Rank label on left column
            if (displayF === 0) {
              const rankLabel = document.createElement('span');
              rankLabel.className = `chess-coord chess-coord--rank ${colorClass}`;
              rankLabel.textContent = RANKS[boardR];
              sq.appendChild(rankLabel);
            }
          }
        }
      }

      this._updatePieceSize();
    }

    _updatePieceSize() {
      if (!this._boardContainer) return;
      const width = this._boardContainer.clientWidth;
      if (width === 0) return;
      const squareSize = width / 8;
      const fontSize = Math.round(squareSize * 0.82);
      for (const sq of this._squareEls) {
        const piece = sq.querySelector('.chess-piece');
        if (piece) {
          piece.style.fontSize = fontSize + 'px';
        }
      }
    }

    _applyHighlights() {
      for (const sq of this._squareEls) {
        // Remove all highlight classes
        for (const c of HIGHLIGHT_COLORS) {
          sq.classList.remove(`chess-square--highlight-${c}`);
        }
        // Apply if highlighted
        const algebraic = sq.dataset.square;
        if (this._highlights.has(algebraic)) {
          const color = this._highlights.get(algebraic);
          sq.classList.add(`chess-square--highlight-${color}`);
        }
      }
    }

    _renderArrows() {
      // Clear existing arrows (keep defs)
      while (this._arrowSvg.childNodes.length > 1) {
        this._arrowSvg.removeChild(this._arrowSvg.lastChild);
      }
      // Clear old defs
      this._arrowDefs.innerHTML = '';

      if (this._arrows.length === 0) return;

      // Each color needs its own marker
      const usedColors = new Set(this._arrows.map(a => a.color));
      for (const c of usedColors) {
        const strokeColor = DEFAULT_ARROW_COLORS[c] || c;
        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
        marker.setAttribute('id', `arrow-head-${c}`);
        marker.setAttribute('markerWidth', '4');
        marker.setAttribute('markerHeight', '4');
        marker.setAttribute('refX', '2.5');
        marker.setAttribute('refY', '2');
        marker.setAttribute('orient', 'auto');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M0,0 L4,2 L0,4 Z');
        path.setAttribute('fill', strokeColor);
        marker.appendChild(path);
        this._arrowDefs.appendChild(marker);
      }

      for (const arrow of this._arrows) {
        const from = this._squareCenterSVG(arrow.from);
        const to = this._squareCenterSVG(arrow.to);
        if (!from || !to) continue;

        // Shorten the line so the arrowhead doesn't overshoot
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const shortenBy = 18;
        const endX = to.x - (dx / len) * shortenBy;
        const endY = to.y - (dy / len) * shortenBy;
        const startX = from.x + (dx / len) * 10;
        const startY = from.y + (dy / len) * 10;

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', startX);
        line.setAttribute('y1', startY);
        line.setAttribute('x2', endX);
        line.setAttribute('y2', endY);
        line.setAttribute('stroke', DEFAULT_ARROW_COLORS[arrow.color] || arrow.color);
        line.setAttribute('stroke-width', '14');
        line.setAttribute('stroke-linecap', 'round');
        line.setAttribute('opacity', '0.8');
        line.setAttribute('marker-end', `url(#arrow-head-${arrow.color})`);
        line.setAttribute('class', 'chess-arrow-line');
        this._arrowSvg.appendChild(line);
      }
    }

    /**
     * Get the SVG-space center coordinates for a given algebraic square.
     * SVG viewBox is 800x800, so each square is 100x100.
     */
    _squareCenterSVG(algebraic) {
      const { rank, file } = squareToIndices(algebraic);
      const displayF = this._flipped ? 7 - file : file;
      const displayR = this._flipped ? 7 - rank : rank;
      return {
        x: displayF * 100 + 50,
        y: displayR * 100 + 50,
      };
    }
  }

  // ── ChessSequence ──────────────────────────────────────────────────

  class ChessSequence {
    /**
     * @param {string} containerId
     * @param {Array} positions - [{fen, highlights?, arrows?, caption?}]
     * @param {object} [options] - passed through to ChessBoard
     */
    constructor(containerId, positions, options = {}) {
      this._containerId = containerId;
      this._container = document.getElementById(containerId);
      if (!this._container) {
        throw new Error(`ChessSequence: element #${containerId} not found`);
      }
      this._positions = positions || [];
      this._index = 0;
      this._options = options;

      this._buildDOM();
      this._board = new ChessBoard(this._boardHostId, {
        showCoords: options.showCoords,
        flipped: options.flipped,
      });

      this._applyPosition(0);
      this._bindEvents();
    }

    next() {
      if (this._index < this._positions.length - 1) {
        this._applyPosition(this._index + 1);
      }
    }

    prev() {
      if (this._index > 0) {
        this._applyPosition(this._index - 1);
      }
    }

    goTo(index) {
      if (index >= 0 && index < this._positions.length) {
        this._applyPosition(index);
      }
    }

    destroy() {
      if (this._board) this._board.destroy();
      if (this._seqWrapper && this._seqWrapper.parentNode) {
        this._seqWrapper.parentNode.removeChild(this._seqWrapper);
      }
    }

    _buildDOM() {
      this._boardHostId = this._containerId + '-board-host';

      this._seqWrapper = document.createElement('div');
      this._seqWrapper.className = 'chess-sequence-wrapper';

      const boardHost = document.createElement('div');
      boardHost.id = this._boardHostId;
      this._seqWrapper.appendChild(boardHost);

      // Controls bar
      const controls = document.createElement('div');
      controls.className = 'chess-sequence-controls';

      this._btnFirst = this._makeBtn('\u23EE');  // ⏮
      this._btnPrev = this._makeBtn('\u25C0');   // ◀
      this._captionEl = document.createElement('span');
      this._captionEl.className = 'chess-seq-caption';
      this._counterEl = document.createElement('span');
      this._counterEl.className = 'chess-seq-counter';
      this._btnNext = this._makeBtn('\u25B6');   // ▶
      this._btnLast = this._makeBtn('\u23ED');   // ⏭

      controls.appendChild(this._btnFirst);
      controls.appendChild(this._btnPrev);
      controls.appendChild(this._captionEl);
      controls.appendChild(this._counterEl);
      controls.appendChild(this._btnNext);
      controls.appendChild(this._btnLast);

      this._seqWrapper.appendChild(controls);
      this._container.appendChild(this._seqWrapper);
    }

    _makeBtn(label) {
      const btn = document.createElement('button');
      btn.className = 'chess-seq-btn';
      btn.textContent = label;
      btn.type = 'button';
      return btn;
    }

    _bindEvents() {
      this._btnFirst.addEventListener('click', () => this.goTo(0));
      this._btnPrev.addEventListener('click', () => this.prev());
      this._btnNext.addEventListener('click', () => this.next());
      this._btnLast.addEventListener('click', () => this.goTo(this._positions.length - 1));

      // Keyboard navigation
      this._keyHandler = (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          this.next();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          this.prev();
        } else if (e.key === 'Home') {
          e.preventDefault();
          this.goTo(0);
        } else if (e.key === 'End') {
          e.preventDefault();
          this.goTo(this._positions.length - 1);
        }
      };
      document.addEventListener('keydown', this._keyHandler);
    }

    _applyPosition(index) {
      this._index = index;
      const pos = this._positions[index];
      if (!pos) return;

      this._board.setPosition(pos.fen);
      this._board.clearHighlights();
      this._board.clearArrows();

      if (Array.isArray(pos.highlights)) {
        for (const h of pos.highlights) {
          this._board.highlight(h.square, h.color || 'green');
        }
      }

      if (Array.isArray(pos.arrows)) {
        for (const a of pos.arrows) {
          this._board.drawArrow(a.from, a.to, a.color || 'green');
        }
      }

      this._captionEl.textContent = pos.caption || '';
      this._counterEl.textContent = `${index + 1} / ${this._positions.length}`;

      // Button states
      this._btnFirst.disabled = index === 0;
      this._btnPrev.disabled = index === 0;
      this._btnNext.disabled = index === this._positions.length - 1;
      this._btnLast.disabled = index === this._positions.length - 1;
    }
  }

  // ── Export ──────────────────────────────────────────────────────────

  if (typeof window !== 'undefined') {
    window.ChessBoard = ChessBoard;
    window.ChessSequence = ChessSequence;
  }

  // ── Self-test ──────────────────────────────────────────────────────
  // When loaded standalone (no container pre-exists), create a demo page.

  function selfTest() {
    // Only run if the page body has no chess containers already
    if (document.getElementById('chess-demo')) return;

    // Inject CSS if not already loaded
    if (!document.querySelector('link[href*="chess-board.css"]')) {
      const style = document.createElement('style');
      style.textContent = `
        body { margin: 0; padding: 24px; background: #1a1510; font-family: -apple-system, sans-serif; color: #e8d5b5; }
        h2 { color: #d4a843; margin-top: 32px; }
        .demo-row { display: flex; flex-wrap: wrap; gap: 32px; margin-top: 16px; }
        .demo-col { flex: 1; min-width: 280px; max-width: 420px; }
      `;
      document.head.appendChild(style);
    }

    const root = document.createElement('div');
    root.id = 'chess-demo';
    root.innerHTML = `
      <h2>Chess Board Component &mdash; Self-Test</h2>

      <div class="demo-row">
        <div class="demo-col">
          <h3 style="color:#d4a843;">1. Starting Position</h3>
          <div id="test-board-1"></div>
        </div>
        <div class="demo-col">
          <h3 style="color:#d4a843;">2. Highlights &amp; Arrows</h3>
          <div id="test-board-2"></div>
        </div>
      </div>

      <h3 style="color:#d4a843; margin-top: 32px;">3. Step-Through: Italian Game</h3>
      <div style="max-width: 420px;">
        <div id="test-sequence"></div>
      </div>
    `;
    document.body.appendChild(root);

    // Test 1: Starting position
    const board1 = new ChessBoard('test-board-1');

    // Test 2: Position with highlights and arrows (Sicilian Defense)
    const board2 = new ChessBoard('test-board-2', {
      fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2',
      highlights: [
        { square: 'e4', color: 'yellow' },
        { square: 'c5', color: 'yellow' },
        { square: 'd4', color: 'green' },
        { square: 'f7', color: 'red' },
      ],
      arrows: [
        { from: 'd2', to: 'd4', color: 'green' },
        { from: 'g1', to: 'f3', color: 'blue' },
      ],
    });

    // Test 3: Step-through sequence — Italian Game
    const sequence = new ChessSequence('test-sequence', [
      {
        fen: START_FEN,
        caption: 'Starting position',
      },
      {
        fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1',
        highlights: [{ square: 'e4', color: 'yellow' }],
        arrows: [{ from: 'e2', to: 'e4', color: 'yellow' }],
        caption: '1. e4',
      },
      {
        fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2',
        highlights: [{ square: 'e5', color: 'yellow' }],
        arrows: [{ from: 'e7', to: 'e5', color: 'yellow' }],
        caption: '1... e5',
      },
      {
        fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
        highlights: [{ square: 'f3', color: 'yellow' }],
        arrows: [{ from: 'g1', to: 'f3', color: 'yellow' }],
        caption: '2. Nf3',
      },
      {
        fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
        highlights: [{ square: 'c6', color: 'yellow' }],
        arrows: [{ from: 'b8', to: 'c6', color: 'yellow' }],
        caption: '2... Nc6',
      },
      {
        fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
        highlights: [{ square: 'c4', color: 'yellow' }],
        arrows: [
          { from: 'f1', to: 'c4', color: 'yellow' },
          { from: 'c4', to: 'f7', color: 'red' },
        ],
        caption: '3. Bc4 — The Italian Game. The bishop eyes f7!',
      },
      {
        fen: 'r1bqk1nr/pppp1ppp/2n5/4p3/1bB1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        highlights: [{ square: 'b4', color: 'green' }, { square: 'c4', color: 'green' }],
        arrows: [
          { from: 'f8', to: 'b4', color: 'green' },
        ],
        caption: '3... Bc5 — symmetrical development. A classical battle begins.',
      },
    ]);

    // Console verification
    console.log('[ChessBoard] Self-test complete. 2 boards + 1 sequence rendered.');
    console.log('[ChessBoard] API methods available: setPosition, highlight, clearHighlights, drawArrow, clearArrows, flip, destroy');
  }

  // Run self-test when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', selfTest);
  } else {
    selfTest();
  }
})();
