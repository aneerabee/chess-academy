const LESSONS_EN = [
  // ========================================================================
  // PHASE 1: The Board Is Not Flat (FREE)
  // ========================================================================
  {
    id: 'phase-1',
    title: 'The Board Is Not Flat',
    subtitle: 'Learn to see it through a commander\'s eyes',
    free: true,
    color: '#4ac878',
    concepts: [
      // ----------------------------------------------------------------------
      // 1-1  The Board & Coordinates
      // ----------------------------------------------------------------------
      {
        id: 'board-coordinates',
        title: 'The Board & Coordinates',
        icon: '\u265F',
        content: `
<h3>First Step: Get to Know the Battlefield</h3>
<p>A chessboard is made up of 64 squares arranged in an 8\u00d78 grid. These squares are not random \u2014 every single one has a unique name, just like a street address in a city. If you want to tell a friend where you placed your piece, you don\u2019t say "the third square from the left." You say "e4" \u2014 and that\u2019s exactly what we\u2019re about to learn.</p>
<h3>Files \u2014 The Letters a through h</h3>
<p>Look at the board from White\u2019s perspective (the player sitting at the bottom). The vertical columns are called <strong>files</strong> and are labeled with letters from <strong>a</strong> (far left) to <strong>h</strong> (far right). Think of them as long avenues running from the bottom of the board to the top.</p>
<ul>
<li>The a-file: far left</li>
<li>The d- and e-files: in the center \u2014 the most important ones, as we\u2019ll see later</li>
<li>The h-file: far right</li>
</ul>
<h3>Ranks \u2014 The Numbers 1 through 8</h3>
<p>The horizontal rows are called <strong>ranks</strong> and are numbered from <strong>1</strong> (closest to White) to <strong>8</strong> (closest to Black). Think of them as floors in a building \u2014 floor 1 is the ground floor on White\u2019s side.</p>
<ul>
<li>Rank 1: where White\u2019s major pieces start (king, queen, rooks\u2026)</li>
<li>Rank 2: where White\u2019s pawns start</li>
<li>Rank 7: where Black\u2019s pawns start</li>
<li>Rank 8: where Black\u2019s major pieces start</li>
</ul>
<h3>Naming Any Square</h3>
<p>To name any square, combine the file letter with the rank number. For example:</p>
<ul>
<li><strong>e4</strong>: file e, rank 4 \u2014 the most famous square in chess!</li>
<li><strong>a1</strong>: bottom-left corner \u2014 always a dark square</li>
<li><strong>h1</strong>: bottom-right corner \u2014 always a light square</li>
<li><strong>d5</strong>: a powerful central square</li>
</ul>
<h3>Light and Dark Squares</h3>
<p>Half the squares are light (32 squares) and half are dark (32 squares). An important rule: <strong>a1 is always dark</strong>. If you set up the board and find a1 is light, the board is rotated! Also, <strong>h1 is always light</strong>. This means the bottom-right corner for White must be a light square \u2014 the easiest way to verify your board is set up correctly.</p>
<h3>Why Do Square Names Matter?</h3>
<p>Square names are the language of chess. Without them you cannot:</p>
<ul>
<li>Read or write game moves</li>
<li>Solve chess puzzles</li>
<li>Follow explanations in books and videos</li>
<li>Communicate with other players about specific positions</li>
</ul>
<p>The good news: after a few games you\u2019ll memorize the coordinates automatically, just like you learned the street names in your neighborhood by walking around.</p>
<h3>Golden Tip</h3>
<p>Don\u2019t try to memorize every square at once. Start with the four central squares: <strong>d4, d5, e4, e5</strong>. Then learn the corners: <strong>a1, h1, a8, h8</strong>. The rest will come with practice. Remember: files are letters (left to right: a\u2013h), ranks are numbers (bottom to top: 1\u20138), and every square = letter + number.</p>
`,
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        highlights: ['e4', 'd4', 'e5', 'd5'],
        arrows: [],
        commonMistake: 'Beginners try to memorize every square name on day one as if cramming a multiplication table. That\u2019s a mistake \u2014 the right approach is to play games and read the coordinates of each move. Over time your brain will link every square to its name automatically. Another common error: setting up the board incorrectly. Remember the rule \u2014 the light square always goes in your bottom-right corner.',
        analogy: 'Think of the chessboard as a city map. The files (a\u2013h) are the main streets, and the ranks (1\u20138) are the districts. When you say "e4," you\u2019re saying "e street, district 4" \u2014 just like a postal address. Nobody says "the building next to the big shop"; they give you the exact address. That\u2019s how chess players talk.',
        practice: 'Open lichess.org/analysis (free) and enable the coordinate display option. Hover over 10 random squares and try to guess each name before looking. Repeat this exercise for 5 minutes a day for one week, and you\u2019ll find you can identify coordinates in a flash.',
        quiz: [
          {
            question: 'What is the name of the square in White\u2019s bottom-right corner?',
            options: ['h1', 'a1', 'h8', 'a8'],
            correct: 0,
            explanation: 'h1 is the square in White\u2019s bottom-right corner. It is always a light square \u2014 an important rule to verify that your board is set up correctly.'
          },
          {
            question: 'How many squares are on a chessboard?',
            options: ['32', '48', '100', '64'],
            correct: 3,
            explanation: 'The board has 8 files \u00d7 8 ranks = 64 squares, half light and half dark.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 1-2  How Each Piece Moves
      // ----------------------------------------------------------------------
      {
        id: 'piece-movement',
        title: 'How Each Piece Moves',
        icon: '\u265A',
        content: `
<h3>The Six Pieces \u2014 Your Complete Army</h3>
<p>Chess has 6 types of pieces, each moving in its own unique way. Learning how every piece moves is the single most important thing in your chess life. Everything that follows \u2014 tactics, openings, endgames \u2014 is built on a deep understanding of piece movement.</p>
<h3>\u2654 The King \u2014 The Slow Commander</h3>
<p>The king is the most important piece on the board because if it\u2019s checkmated, the game is over. Yet it\u2019s also the slowest piece \u2014 it moves <strong>only one square in any direction</strong>: forward, backward, left, right, or diagonally. The king can never move to a square attacked by an opponent\u2019s piece. Think of it as the president under protection \u2014 never going anywhere dangerous. Early on you hide it from harm, but in the endgame it transforms into a powerful attacker!</p>
<h3>\u2655 The Queen \u2014 The Powerhouse</h3>
<p>The queen is the strongest piece in the game. She moves <strong>any number of squares in any direction \u2014 horizontally, vertically, or diagonally</strong>. She combines the powers of the rook and the bishop! She can control a huge number of squares from a single position. But because she\u2019s so valuable, don\u2019t bring her out early \u2014 your opponent will chase her with less valuable pieces and waste your time.</p>
<h3>\u2656 The Rook \u2014 Straight Lines Only</h3>
<p>The rook moves <strong>in straight lines only \u2014 horizontally or vertically, any number of squares</strong>. It never moves diagonally. The rook is extremely powerful on open files (columns with no pawns) and ranks. You start with two rooks \u2014 in the corners. Remember: rooks need open files to operate efficiently, so don\u2019t trap them behind your own pawns.</p>
<h3>\u2657 The Bishop \u2014 Master of Diagonals</h3>
<p>The bishop moves <strong>diagonally only, any number of squares</strong>. You have two bishops: one on light squares and one on dark squares, and neither will ever change its square color for the entire game. This means your light-squared bishop can\u2019t attack a piece on a dark square and vice versa. That\u2019s why the bishop pair together is much stronger than a single bishop \u2014 they cover all square colors.</p>
<h3>\u2658 The Knight \u2014 The Jumper</h3>
<p>The knight is the most unique piece. It moves in an <strong>L-shape</strong>: two squares in one direction then one square perpendicular (or vice versa). Crucially, <strong>the knight is the only piece that can jump over other pieces</strong>. In the starting position, the knight is the only piece that can move without a pawn being pushed first. Knights excel in closed positions where other pieces are blocked.</p>
<h3>\u2659 The Pawn \u2014 The Humble Soldier</h3>
<p>The pawn is the smallest piece and the one with the most complex rules:</p>
<ul>
<li><strong>Normal move:</strong> Advances one square forward only (never backward).</li>
<li><strong>First move:</strong> From its starting square it may advance two squares.</li>
<li><strong>Capturing:</strong> Captures diagonally only \u2014 one square forward-left or forward-right. <em>It does not capture straight ahead.</em></li>
<li><strong>En Passant:</strong> If an opponent\u2019s pawn advances two squares and lands beside your pawn, you may capture it as though it only moved one square \u2014 but you must do so immediately on the very next move or the right is lost.</li>
<li><strong>Promotion:</strong> When a pawn reaches the last rank (rank 8 for White, rank 1 for Black) it transforms into any piece you choose (usually a queen). A humble pawn can become a queen!</li>
</ul>
<h3>Movement Summary</h3>
<table>
<tr><th>Piece</th><th>Movement</th><th>Jumps?</th></tr>
<tr><td>\u2654 King</td><td>One square any direction</td><td>No</td></tr>
<tr><td>\u2655 Queen</td><td>Any direction, any distance</td><td>No</td></tr>
<tr><td>\u2656 Rook</td><td>Horizontal & vertical, any distance</td><td>No</td></tr>
<tr><td>\u2657 Bishop</td><td>Diagonal, any distance</td><td>No</td></tr>
<tr><td>\u2658 Knight</td><td>L-shape</td><td>Yes!</td></tr>
<tr><td>\u2659 Pawn</td><td>Forward only; captures diagonally</td><td>No</td></tr>
</table>
`,
        fen: '8/8/8/3q4/8/8/8/8 w - - 0 1',
        highlights: ['d5'],
        arrows: [['d5','d8'],['d5','d1'],['d5','a5'],['d5','h5'],['d5','a8'],['d5','h1'],['d5','g8'],['d5','a2']],
        commonMistake: 'The biggest mistake beginners make: letting the pawn capture straight ahead. Remember \u2014 the pawn moves forward but captures diagonally only! Also, many beginners forget the knight can jump over pieces, so they never move it because they think the pieces in front are blocking it.',
        analogy: 'Imagine a real army. The king is the commander-in-chief (slow but if he falls the war is over). The queen is the top general (goes anywhere she likes). The two rooks are tanks (rolling in straight lines). The two bishops are snipers (working from the angles). The two knights are paratroopers (leaping over enemy lines). The pawns are infantry (advancing slowly, but any one of them can be promoted to general!).',
        practice: 'Place each piece alone on an empty board at lichess.org/analysis and try moving it around. Start with the rook (easiest), then the bishop, then the queen. Next try the knight \u2014 put it in the center and count how many squares it can reach (answer: 8). Then put it in the corner and count (answer: only 2!). This teaches you why the knight is stronger in the center.',
        quiz: [
          {
            question: 'Which piece can jump over other pieces?',
            options: ['Bishop', 'Rook', 'Knight', 'Queen'],
            correct: 2,
            explanation: 'The knight is the only piece in chess that jumps over other pieces. That\u2019s why you can move the knight at the start of the game before any pawn has moved.'
          },
          {
            question: 'How does a pawn capture?',
            options: ['Diagonally forward', 'Straight ahead', 'In any direction', 'Backward only'],
            correct: 0,
            explanation: 'The pawn moves straight forward but captures diagonally \u2014 one square forward-left or forward-right. This is one of the most commonly forgotten rules among beginners.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 1-3  The Center Is the Throne
      // ----------------------------------------------------------------------
      {
        id: 'center-control',
        title: 'The Center Is the Throne',
        icon: '\u265B',
        content: `
<h3>Why the Center Matters More Than the Edges</h3>
<p>On the chessboard, the four central squares \u2014 <strong>e4, d4, e5, d5</strong> \u2014 are the most important squares of all. Whoever controls the center controls the game. This is not an exaggeration \u2014 it\u2019s a fact proven over centuries of top-level chess.</p>
<h3>The Mathematical Reason</h3>
<p>Place a knight on e4 (the center). How many squares can it reach? <strong>8 squares</strong>. Now place it on a1 (the corner). How many? <strong>Only 2!</strong> The same piece is 4 times more powerful in the center than in the corner. The same logic applies to every piece \u2014 a bishop in the center covers longer diagonals, and the queen in the center controls more squares.</p>
<h3>The Extended Center</h3>
<p>Beyond the four main central squares, there\u2019s the "extended center" \u2014 the surrounding squares: c3, c4, c5, c6, d3, d6, e3, e6, f3, f4, f5, f6. Controlling this area is also very important, but the four core squares take priority.</p>
<h3>Two Ways to Control the Center</h3>
<p>There are two main approaches:</p>
<ol>
<li><strong>Direct occupation:</strong> Place your pawns in the center (e.g., e4 and d4). This prevents your opponent\u2019s pieces from entering those squares.</li>
<li><strong>Remote control:</strong> Aim your pieces at the center without physically placing them there. For example, a knight on f3 controls the central squares e5 and d4. This approach is called "hypermodern" control.</li>
</ol>
<h3>What Do You Gain from the Center?</h3>
<ul>
<li><strong>Freedom of movement:</strong> Your pieces can shift quickly from one side to the other via the center.</li>
<li><strong>Attacking power:</strong> Centralized pieces threaten both flanks of the board.</li>
<li><strong>Restricting your opponent:</strong> If you dominate the center with pawns, your opponent\u2019s pieces become cramped and passive.</li>
<li><strong>Speed:</strong> Pieces in the center reach any part of the board faster \u2014 like living downtown means you can get anywhere quickly.</li>
</ul>
<h3>Practical Examples</h3>
<p>In the position shown, White has played 1.e4 and 2.d4, seizing the center with strong pawns. The pieces behind those pawns are ready to spring into action. If Black doesn\u2019t react quickly, they\u2019ll lose the initiative and spend the entire game defending.</p>
<p>In most modern openings, White\u2019s first move is either <strong>1.e4</strong> or <strong>1.d4</strong> \u2014 both aiming to control the center. This is no coincidence \u2014 the greatest players in history have all agreed on the center\u2019s importance.</p>
`,
        fen: 'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3',
        highlights: ['e4', 'd4', 'e5', 'd5'],
        arrows: [['d4','e5'],['e4','d5']],
        commonMistake: 'Beginners push side pawns (a4, h4) instead of central ones. Or they move the same piece multiple times in the opening instead of developing new pieces toward the center. Remember: every opening move should serve center control, directly or indirectly.',
        analogy: 'The center in chess is like the main town square. Whoever owns the square controls every street leading into it. The side files (a and h) are like suburbs \u2014 far from the action. If you wanted to open a successful restaurant, would you put it on the main square or at the end of a back alley? Obviously the square! Same logic for your pieces.',
        practice: 'Play 5 games on lichess.org and in each game focus on one goal: place at least one pawn in the center (e4 or d4 for White, e5 or d5 for Black) within the first 4 moves. After each game, review whether you succeeded in controlling the center.',
        quiz: [
          {
            question: 'What are the four central squares in chess?',
            options: ['a1, a8, h1, h8', 'e4, d4, e5, d5', 'c3, c6, f3, f6', 'b2, b7, g2, g7'],
            correct: 1,
            explanation: 'e4, d4, e5, d5 are the true center of the board. Controlling them is the first objective in any chess game.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 1-4  Piece Values
      // ----------------------------------------------------------------------
      {
        id: 'piece-values',
        title: 'Piece Values',
        icon: '\u2696',
        content: `
<h3>Not All Pieces Are Created Equal</h3>
<p>In chess, every piece has an approximate point value that helps you make exchange decisions. These values aren\u2019t absolute \u2014 the position on the board can change them \u2014 but they\u2019re an excellent guide for beginners.</p>
<h3>Value Table</h3>
<table>
<tr><th>Piece</th><th>Value</th><th>Notes</th></tr>
<tr><td>\u2659 Pawn</td><td><strong>1</strong></td><td>The basic unit of measurement</td></tr>
<tr><td>\u2658 Knight</td><td><strong>3</strong></td><td>Worth roughly 3 pawns</td></tr>
<tr><td>\u2657 Bishop</td><td><strong>3</strong></td><td>Worth about 3 pawns; sometimes rated 3.25</td></tr>
<tr><td>\u2656 Rook</td><td><strong>5</strong></td><td>Much stronger than a knight or bishop</td></tr>
<tr><td>\u2655 Queen</td><td><strong>9</strong></td><td>Strongest piece \u2014 roughly a rook + bishop + pawn</td></tr>
<tr><td>\u2654 King</td><td><strong>\u221e</strong></td><td>Cannot be lost \u2014 infinite value</td></tr>
</table>
<h3>How to Use These Values</h3>
<p>When your opponent offers a trade (piece for piece), compare the values:</p>
<ul>
<li>If you take their rook (5) and lose your knight (3), you\u2019ve won 2 points of material \u2014 an excellent trade!</li>
<li>If you take their bishop (3) and lose your rook (5), you\u2019ve lost 2 points \u2014 a bad trade.</li>
<li>If you swap your knight (3) for their bishop (3), it\u2019s an even exchange.</li>
</ul>
<h3>Knight vs. Bishop</h3>
<p>Even though both are worth 3, there are important differences:</p>
<ul>
<li><strong>Bishop is better in</strong> open positions (few pawns) because it controls long diagonals.</li>
<li><strong>Knight is better in</strong> closed positions (many pawns) because it jumps over them.</li>
<li><strong>Two bishops together</strong> (the "bishop pair") are much stronger than bishop + knight or two knights, especially in endgames.</li>
</ul>
<h3>When to Break the Rules</h3>
<p>These values are guidelines, not laws. Sometimes you sacrifice a bigger piece for a strategic reason:</p>
<ul>
<li><strong>Sacrificing a rook (5) for checkmate:</strong> The king\u2019s value is infinite, so any sacrifice is worthwhile if it leads to checkmate.</li>
<li><strong>Sacrificing a pawn for rapid development:</strong> Some openings (called "gambits") give up a pawn in exchange for better activity.</li>
<li><strong>A knight on a strong square</strong> can be worth more than a rook trapped behind its own pawns.</li>
</ul>
<h3>The Concept of "Material"</h3>
<p>Chess players use the word "material" to describe the total value of pieces. "Winning material" means the sum of your pieces\u2019 values is greater than your opponent\u2019s. In most games \u2014 especially between beginners \u2014 the player with more material wins. So: don\u2019t give away your pieces without a clear reason!</p>
`,
        fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        highlights: ['c4', 'f3', 'c6', 'f6'],
        arrows: [],
        commonMistake: 'The most dangerous mistake beginners make is trading a rook (5) for a knight or bishop (3) thinking it\u2019s a fair exchange. This is called "losing the exchange" and usually costs you the game. Also, some beginners sacrifice their queen (9) to capture a rook (5) \u2014 that\u2019s a loss of 4 points! Always count the values before any trade.',
        analogy: 'Think of pieces as currency. Pawn = $1, Knight/Bishop = $3, Rook = $5, Queen = $9. Would you trade a $5 bill for $3? Of course not! Same logic in chess. But remember \u2014 sometimes you pay $5 for a priceless service (checkmate!).',
        practice: 'After every game you play, go back and analyze the trades. Each time you exchanged pieces, ask yourself: was the trade winning, losing, or even? Write down the results. You\u2019ll discover that improving your trades alone raises your level significantly.',
        quiz: [
          {
            question: 'Your opponent offers a trade: your rook for their knight. Should you accept?',
            options: ['Yes \u2014 fair trade', 'No difference between them', 'Yes \u2014 the knight is stronger because it jumps', 'No \u2014 the rook is stronger by 2 points'],
            correct: 3,
            explanation: 'The rook (5) is stronger than the knight (3) by 2 points. Accepting this trade means losing the exchange \u2014 a significant error in most positions.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 1-5  Special Rules
      // ----------------------------------------------------------------------
      {
        id: 'special-rules',
        title: 'Special Rules',
        icon: '\u26A1',
        content: `
<h3>Four Rules That Change the Course of a Game</h3>
<p>Chess has 4 special rules you absolutely must know. These rules aren\u2019t rare \u2014 they occur in almost every game, and not knowing them will cost you many losses.</p>
<h3>\u2654\u2656 Castling</h3>
<p>Castling is the only move in chess where you move two pieces at once \u2014 the king and a rook. Its purpose is to protect the king and activate the rook.</p>
<p><strong>Kingside castling (short):</strong> The king moves two squares toward the rook (e1 to g1), and the rook jumps over the king (h1 to f1). Notation: <strong>O-O</strong></p>
<p><strong>Queenside castling (long):</strong> The king moves two squares toward the rook (e1 to c1), and the rook jumps over (a1 to d1). Notation: <strong>O-O-O</strong></p>
<p><strong>Castling requirements (all must be met):</strong></p>
<ol>
<li>The king has not moved previously in this game.</li>
<li>The rook involved has not moved previously.</li>
<li>No pieces stand between the king and the rook.</li>
<li>The king is not currently in check.</li>
<li>The king does not pass through a square attacked by an enemy piece.</li>
<li>The king does not land on a square attacked by an enemy piece.</li>
</ol>
<h3>\u2659 En Passant</h3>
<p>This is the strangest rule in chess. When an opponent\u2019s pawn advances two squares from its starting position and lands beside your pawn (on the same rank), you may capture it as though it had only advanced one square. Your pawn moves diagonally to the square behind the opponent\u2019s pawn and removes it.</p>
<p><strong>Critical condition:</strong> You must capture en passant <strong>immediately on the very next move</strong>. If you play any other move, the right is lost forever. This is the only rule in chess tied to a specific timing window.</p>
<h3>\u2659\u2192\u2655 Pawn Promotion</h3>
<p>When your pawn reaches the last rank (rank 8 for White, rank 1 for Black), you <strong>must</strong> transform it into another piece: queen, rook, bishop, or knight. In 99% of cases you choose a queen because she\u2019s the strongest. But occasionally \u2014 in rare situations \u2014 a knight is better (e.g., if the knight delivers check and a fork simultaneously).</p>
<p>You can have more than one queen! Theoretically you could have 9 queens (the original + 8 promoted pawns) \u2014 but this will never happen in a real game.</p>
<h3>\u2654 Checkmate vs. Stalemate</h3>
<p><strong>Checkmate:</strong> The king is attacked (in check) and there\u2019s no way to escape \u2014 no blocking, no capturing the attacker, no moving to safety. The game is over \u2014 the player whose king is checkmated loses.</p>
<p><strong>Stalemate:</strong> It\u2019s a player\u2019s turn and their king is <strong>not</strong> in check, but they have no legal move. The result: <strong>draw!</strong> This is a trap many beginners fall into \u2014 they\u2019ll have an overwhelming advantage (queen and two rooks against a lone king) but accidentally stalemate the opponent\u2019s king, turning a win into a draw!</p>
<p><strong>Golden rule:</strong> Before you make your move, ask: will my opponent\u2019s king have any legal move after this? If it\u2019s in check with no escape = checkmate (you win). If it\u2019s not in check with no legal move = stalemate (a wasted draw).</p>
`,
        fen: 'r3k2r/pppppppp/8/8/8/8/PPPPPPPP/R3K2R w KQkq - 0 1',
        highlights: ['e1', 'a1', 'h1', 'e8', 'a8', 'h8'],
        arrows: [['e1','g1'],['h1','f1']],
        commonMistake: 'The most common mistake is forgetting the castling requirements. A beginner moves their king one square and later wants to castle \u2014 but that\u2019s impossible because the king has already moved! Also, many beginners don\u2019t know about stalemate and lose many points by turning a sure win into a draw.',
        analogy: 'Castling is like an emergency protocol: the king retreats to a fortified bunker (behind the pawns) while the rook comes out to fight. En passant is like intercepting a speeding car \u2014 if an opponent\u2019s pawn zooms past yours, you\u2019re allowed to stop it. Stalemate is like cornering an enemy in a room with no door \u2014 you can\u2019t get in to hit them (no check) and they can\u2019t get out (no legal move) \u2014 nobody wins.',
        practice: 'Exercise 1: Play against the computer on lichess and try to castle before move 10 in 5 consecutive games. Exercise 2: Search lichess.org/training for "Stalemate" puzzles and learn how to avoid stalemate when you\u2019re ahead.',
        quiz: [
          {
            question: 'What is the difference between checkmate and stalemate?',
            options: [
              'Checkmate = king is in check with no escape (loss). Stalemate = king is not in check but has no legal move (draw)',
              'No difference \u2014 both end the game',
              'Stalemate means winning and checkmate means drawing',
              'Checkmate is for White only and stalemate is for Black only'
            ],
            correct: 0,
            explanation: 'Checkmate = king is in check with no solution = loss. Stalemate = king is NOT in check but has no legal move = draw. Many games are ruined because players don\u2019t understand this distinction!'
          }
        ]
      }
    ]
  },
  // ========================================================================
  // PHASE 2: Your First 10 Moves (FREE)
  // ========================================================================
  {
    id: 'phase-2',
    title: 'Your First 10 Moves',
    subtitle: 'The opening determines the game\u2019s fate',
    free: true,
    color: '#4a90d9',
    concepts: [
      // ----------------------------------------------------------------------
      // 2-1  The Four Opening Tasks
      // ----------------------------------------------------------------------
      {
        id: 'opening-tasks',
        title: 'The Four Opening Tasks',
        icon: '\uD83D\uDCCB',
        content: `
<h3>Don\u2019t Memorize \u2014 Understand the Principles</h3>
<p>Many beginners think the opening is about memorizing long sequences of moves. That\u2019s a big mistake. At your current level, all you need are 4 simple tasks. If you accomplish them in the first 10 moves, you\u2019ll emerge from the opening with an excellent position \u2014 even without memorizing a single opening line.</p>
<h3>Task 1: Control the Center</h3>
<p>As we learned in the previous lesson, the center is the throne. Your first move or two should be a central pawn \u2014 <strong>e4</strong> or <strong>d4</strong> for White, <strong>e5</strong> or <strong>d5</strong> for Black. This gives your pieces space and denies your opponent center control.</p>
<h3>Task 2: Develop the Minor Pieces</h3>
<p>"Development" means moving pieces from their starting squares to active squares. The rule: <strong>get both knights and both bishops out before move 10</strong>. Knights usually go to f3/c3 for White (or f6/c6 for Black). Bishops go to active squares that control the center or prepare for castling.</p>
<p><strong>Important rule:</strong> Don\u2019t move the same piece twice in the opening unless there\u2019s a strong reason (like avoiding piece loss). Every move you spend on a piece you\u2019ve already developed is a move you didn\u2019t use to develop a new one.</p>
<h3>Task 3: Castle Early</h3>
<p>Castling achieves two goals at once: it puts the king in a safe place and activates the rook. Try to castle before move 10. Kingside castling (O-O) is faster because you only need to move two pieces (the knight and bishop), while queenside castling requires three (knight, bishop, and queen).</p>
<p><strong>Warning:</strong> Don\u2019t delay castling! A king stuck in the center is an easy target. Many games are decided by an attack on an uncastled king.</p>
<h3>Task 4: Connect the Rooks</h3>
<p>After castling and developing all minor pieces, there should be no pieces between your two rooks on the first rank. This is called "connecting the rooks." When the rooks are connected, each protects the other and they can move freely along the first rank to jump onto open files.</p>
<h3>Task Order</h3>
<ol>
<li>Central pawn (moves 1\u20132)</li>
<li>Develop knights (moves 2\u20135)</li>
<li>Develop bishops (moves 3\u20137)</li>
<li>Castle (moves 5\u201310)</li>
<li>Connect the rooks (moves 8\u201312)</li>
</ol>
<p>This order is flexible \u2014 sometimes you\u2019ll need to adjust based on your opponent\u2019s moves. But if you complete all four tasks within the first 12 moves, you\u2019re in great shape.</p>
`,
        fen: 'r1bqkb1r/pppppppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        highlights: ['e4', 'f3', 'c4', 'c6', 'f6'],
        arrows: [['e1','g1']],
        commonMistake: 'The three big opening mistakes: (1) Bringing the queen out too early \u2014 the opponent will chase it with minor pieces and gain time. (2) Pushing flank pawns instead of developing pieces. (3) Forgetting to castle \u2014 the king in the center will face a lethal attack. Remember: develop the minor pieces first, castle, then think about the queen.',
        analogy: 'The opening is like assembling an army for battle. Task 1 (center) = seizing the strategic hills. Task 2 (development) = deploying troops to their positions. Task 3 (castling) = securing the command headquarters. Task 4 (connecting rooks) = opening supply lines. An army that isn\u2019t properly assembled won\u2019t win even if it\u2019s larger.',
        practice: 'Play 10 quick games (10 minutes) and after each one ask yourself: did I complete all four tasks before move 12? Put a check or an X for each task. Your goal: 4 out of 4 every game. You\u2019ll notice your games improve dramatically just by following these tasks.',
        quiz: [
          {
            question: 'What are the four opening tasks in the correct order?',
            options: [
              'Attack, defend, exchange, checkmate',
              'Center, develop, castle, connect rooks',
              'Bring out the queen, attack, castle, capture pawns',
              'Flank pawns, queenside castle, queen out, attack'
            ],
            correct: 1,
            explanation: 'The four tasks are: control the center, develop minor pieces (knights and bishops), castle early, and connect the rooks. This system ensures a solid position after the opening.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 2-2  The Italian Game
      // ----------------------------------------------------------------------
      {
        id: 'italian-game',
        title: 'The Italian Game',
        icon: '\uD83C\uDDEE\uD83C\uDDF9',
        content: `
<h3>The Oldest and Most Famous Opening in History</h3>
<p>The Italian Game is one of the oldest recorded openings \u2014 dating back to 15th-century Italy. It\u2019s ideal for beginners because it applies the four opening tasks naturally and clearly.</p>
<h3>The Key Moves</h3>
<p><strong>1. e4 e5</strong> \u2014 Both sides grab center space with a pawn.</p>
<p><strong>2. Nf3 Nc6</strong> \u2014 White develops the knight and attacks the e5 pawn. Black develops a knight to defend it.</p>
<p><strong>3. Bc4</strong> \u2014 This is where the Italian Game begins! The bishop comes to c4 where it:</p>
<ul>
<li>Controls a diagonal aimed at the center</li>
<li>Targets the f7 square \u2014 the weakest point in Black\u2019s camp (guarded only by the king)</li>
<li>Prepares for kingside castling</li>
</ul>
<h3>Why Is f7 a Weak Point?</h3>
<p>In the starting position, every square in front of the opponent\u2019s pawns is protected by multiple pieces \u2014 except f7 (for Black) and f2 (for White). These squares are defended only by the king. That\u2019s why many early attacks target them. The bishop on c4 aims straight at f7.</p>
<h3>After Move 3</h3>
<p>Black has several options:</p>
<ul>
<li><strong>3...Bc5</strong> (Giuoco Piano \u2014 the "Quiet Game"): Black develops their bishop symmetrically. The game stays balanced.</li>
<li><strong>3...Nf6</strong> (Two Knights Defense): Black attacks the e4 pawn instead of developing the bishop. This leads to sharp tactical play.</li>
<li><strong>3...d6</strong>: A solid but passive defense \u2014 Black protects e5 but locks in their bishop.</li>
</ul>
<h3>The Plan After the Opening</h3>
<p>After 3.Bc4, your plan as White:</p>
<ol>
<li>Castle kingside (O-O) \u2014 move 4 or 5.</li>
<li>Play d3 or d4 to support the center and open a line for the other bishop.</li>
<li>Develop the second bishop (usually to e3 or g5).</li>
<li>Connect the rooks and look for tactical opportunities.</li>
</ol>
<h3>Why Is the Italian Game Perfect for Beginners?</h3>
<p>Because it teaches you correct principles naturally: central pawn, knight controlling the center, bishop on an active diagonal, rapid castling. You don\u2019t need to memorize 20 moves \u2014 just understand the principles and the right moves will find themselves.</p>
`,
        fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
        highlights: ['c4', 'f7', 'e4', 'f3'],
        arrows: [['c4','f7'],['f3','e5']],
        commonMistake: 'After 3.Bc4, beginners try to immediately play Qh5 or Qf3 to attack f7. This is called the "Scholar\u2019s Mate" attempt. The problem is that if your opponent knows how to defend (and it\u2019s easy), you\u2019ll have brought your queen out too early and wasted time. Better: develop calmly, then attack.',
        analogy: 'The Italian Game is like a classic military strategy: send the scouts first (knight to f3), then position the sniper in a strategic spot (bishop on c4 aiming at f7), then secure the command post (castle). Don\u2019t rush the general (queen) to the front lines in the opening minute!',
        practice: 'Play 10 games as White and always start with 1.e4, then 2.Nf3, then 3.Bc4 (if your opponent plays e5 and Nc6). Focus on castling before move 7. After the games, review how your development compared to your opponent\u2019s \u2014 you\u2019ll notice you\u2019re usually better developed.',
        quiz: [
          {
            question: 'In the Italian Game, why does the bishop go to c4?',
            options: [
              'Because it\u2019s the nearest available square',
              'To protect the e4 pawn',
              'To target f7 (Black\u2019s weakest point) and prepare for castling',
              'To attack the knight on c6'
            ],
            correct: 2,
            explanation: 'The bishop on c4 aims at f7 \u2014 the weakest point in Black\u2019s camp because it\u2019s protected only by the king. Bringing the bishop out also prepares for kingside castling.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 2-3  The London System
      // ----------------------------------------------------------------------
      {
        id: 'london-system',
        title: 'The London System',
        icon: '\uD83C\uDFF0',
        content: `
<h3>The Opening That Requires No Memorization</h3>
<p>If you hate memorizing long move sequences, the London System is your best friend. This system relies on fixed principles instead of specific moves \u2014 no matter what your opponent plays, you do roughly the same thing.</p>
<h3>The Core Idea</h3>
<p>The London System starts with <strong>1.d4</strong> and then develops pieces in a set order:</p>
<ol>
<li><strong>d4</strong> \u2014 central pawn</li>
<li><strong>Bf4</strong> \u2014 the bishop comes out to f4 before you play e3 (this is critical!)</li>
<li><strong>e3</strong> \u2014 supports the central pawn and opens a path for the other bishop</li>
<li><strong>Nf3</strong> \u2014 knight controlling the center</li>
<li><strong>Bd3</strong> \u2014 the second bishop comes out</li>
<li><strong>c3</strong> \u2014 supports d4 and prevents surprises</li>
<li><strong>O-O</strong> \u2014 castle</li>
<li><strong>Nbd2</strong> \u2014 the second knight develops via d2 (not c3) to support a future e4 push</li>
</ol>
<h3>Why Bf4 Before e3?</h3>
<p>This is the critical point: if you play e3 first, the bishop on c1 gets trapped behind your pawns and can never reach f4. So <strong>always</strong> bring the bishop to f4 before playing e3. This is the one secret of the London System.</p>
<h3>Advantages of the London System</h3>
<ul>
<li><strong>Easy to learn:</strong> Same plan against almost anything your opponent plays.</li>
<li><strong>Solid:</strong> The pawn structure (d4, e3, c3) is very sturdy and hard to attack.</li>
<li><strong>Flexible:</strong> After completing development, you can attack on the kingside (e4, Qe2, Re1), in the center (c4), or even on the queenside.</li>
<li><strong>Saves energy:</strong> No need to study hours of theory \u2014 invest your time in tactics instead.</li>
</ul>
<h3>When Doesn\u2019t It Work?</h3>
<p>The London is excellent for beginners and intermediates, but it\u2019s not ideal every time:</p>
<ul>
<li>If the opponent plays 1...d5 2.Bf4 c5 and attacks your center aggressively, you need to know how to handle the pressure.</li>
<li>At very high levels, opponents know exactly what you\u2019re planning and prepare counter-strategies.</li>
<li>But at beginner and intermediate levels? The London System is pure gold.</li>
</ul>
<h3>The Long-Term Plan</h3>
<p>After completing development, your main plan is:</p>
<ol>
<li>Push e4 to open the center (supported by Nd2)</li>
<li>Bring the queen to e2 or c2</li>
<li>Place the rooks on central or semi-open files</li>
<li>Look for attacking chances on the kingside</li>
</ol>
`,
        fen: 'rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 3 3',
        highlights: ['d4', 'f4', 'f3'],
        arrows: [['f4','d6'],['f4','b8'],['f3','e5'],['f3','d4']],
        commonMistake: 'Mistake #1: playing e3 before Bf4 \u2014 this permanently traps the bishop. Mistake #2: putting the knight on c3 instead of d2 \u2014 the knight on c3 blocks the c-pawn from supporting the center. Mistake #3: rushing the attack before completing development \u2014 finish the four tasks first, then attack.',
        analogy: 'The London System is like building a castle. First you lay the foundation (d4, e3, c3), then you set up the towers (minor pieces), then you secure the king (castling), and finally you open the gates to attack (e4). Anyone who attacks your castle will find it rock-solid. And from a position of safety, you can launch a decisive assault.',
        practice: 'Play 10 games with the London System. In each game follow the order: d4, Bf4 (early!), e3, Nf3, Bd3, c3, O-O, Nbd2. Don\u2019t start attacking until you\u2019ve completed these eight moves. Track how many games you completed the full plan \u2014 you\u2019ll notice your position is always excellent.',
        quiz: [
          {
            question: 'In the London System, why must you bring the bishop to f4 before playing e3?',
            options: [
              'Because the bishop is stronger on f4',
              'No difference \u2014 you can play them in either order',
              'Because the knight needs the e3 square',
              'Because e3 will trap the bishop behind the pawns and it won\u2019t be able to reach f4'
            ],
            correct: 3,
            explanation: 'If you play e3 first, the e3 pawn blocks the diagonal and the bishop cannot escape from c1 to f4. Therefore Bf4 before e3 is the golden rule of the London System.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 2-4  Defending with Black
      // ----------------------------------------------------------------------
      {
        id: 'black-defense',
        title: 'Defending with Black',
        icon: '\uD83D\uDEE1',
        content: `
<h3>Playing Black: A Different Challenge</h3>
<p>When you play Black, you start one step behind \u2014 White moves first and chooses the type of game. Your role as Black is to <strong>equalize first, then look for opportunities</strong>. Don\u2019t try to win from move one \u2014 make the position equal and then wait for your opponent\u2019s mistakes.</p>
<h3>Against 1.e4 \u2014 The Sicilian Defense (Basics)</h3>
<p>The Sicilian Defense begins with <strong>1.e4 c5</strong>. This is the most popular response to 1.e4 worldwide \u2014 played by world champions and suitable for beginners alike.</p>
<p><strong>The idea:</strong> Instead of meeting e4 with e5 (a symmetrical position), you play c5 to attack the center from the flank. The c5 pawn prevents White from easily playing d4, and if White plays it anyway, you\u2019ll capture (cxd4) and gain a central pawn in exchange for a flank pawn \u2014 a small edge.</p>
<p><strong>Simple plan for beginners:</strong></p>
<ol>
<li>1...c5 \u2014 fight for the center</li>
<li>After 2.Nf3, play 2...d6 or 2...Nc6</li>
<li>Develop the knight to f6</li>
<li>Fianchetto the bishop (g6 then Bg7) or develop it normally</li>
<li>Castle</li>
</ol>
<h3>Against 1.d4 \u2014 The Slav Defense (Basics)</h3>
<p>The Slav Defense begins with <strong>1.d4 d5 2.c4 c6</strong>. This is a very solid defense that protects the d5 pawn with c6.</p>
<p><strong>The idea:</strong> The c6 pawn supports d5 and prevents White from dominating the center. Additionally, c6 preserves the possibility of developing the bishop from c8 (unlike the French Defense where e6 traps it).</p>
<p><strong>Simple plan:</strong></p>
<ol>
<li>1...d5 \u2014 meet the center with the center</li>
<li>2...c6 \u2014 support your central pawn</li>
<li>Develop Nf6, Bf5 (bring the bishop out before e6!)</li>
<li>Play e6 later</li>
<li>Develop the other bishop and castle</li>
</ol>
<h3>Golden Rule for Black</h3>
<p>Regardless of which defense you choose:</p>
<ul>
<li><strong>Don\u2019t be afraid:</strong> Black is not weaker \u2014 the gap between White and Black is less than 1%.</li>
<li><strong>Equalize first:</strong> Make the position equal before seeking an advantage.</li>
<li><strong>Exploit your opponent\u2019s mistakes:</strong> At beginner level, White will make plenty of errors \u2014 capitalize on them.</li>
<li><strong>Same principles:</strong> The four opening tasks apply to Black too.</li>
</ul>
`,
        fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2',
        highlights: ['c5', 'e4', 'd4'],
        arrows: [['c5','d4']],
        commonMistake: 'The biggest mistake beginners make with Black: playing completely passively \u2014 only reacting to the opponent\u2019s moves with no plan of their own. Or the opposite: attacking recklessly without completing development. The middle ground: develop your pieces first, equalize the position, then look for counterattacking chances.',
        analogy: 'Playing Black is like a boxer who takes the first punch. You don\u2019t need to win in the opening seconds \u2014 absorb the attack, find your balance, then look for the right opening to counterpunch. Muhammad Ali was a master of this \u2014 he\u2019d let the opponent attack, then strike with a decisive blow.',
        practice: 'Play 5 games as Black against 1.e4 using the Sicilian (1...c5), and 5 games as Black against 1.d4 using the Slav (1...d5 2...c6). In each game, focus on completing development and castling before move 10. Don\u2019t attack until you\u2019ve finished the four tasks.',
        quiz: [
          {
            question: 'Why does Black play 1...c5 (Sicilian) instead of 1...e5 against 1.e4?',
            options: [
              'Because c5 attacks the center from the flank and prevents easy d4',
              'Because c5 protects the king',
              'Because e5 is a bad move',
              'Because c5 develops the queen'
            ],
            correct: 0,
            explanation: 'The Sicilian (c5) attacks the d4 square from the flank. If White plays d4, Black captures with cxd4 and gains a central pawn in exchange for a flank pawn \u2014 a strategic edge. It also creates an asymmetrical, richer game.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 2-5  Deadly Traps
      // ----------------------------------------------------------------------
      {
        id: 'deadly-traps',
        title: 'Deadly Traps',
        icon: '\uD83D\uDC80',
        content: `
<h3>Know Them to Avoid Them \u2014 and Maybe Use Them!</h3>
<p>Chess has famous traps that catch beginners over and over. Knowing these traps is important for two reasons: first, to avoid falling into them; second, to use them against opponents who don\u2019t know better. At beginner level, these traps end games in under 10 moves.</p>
<h3>Trap 1: Scholar\u2019s Mate</h3>
<p>The most famous beginner checkmate in chess history:</p>
<ol>
<li><strong>1. e4 e5</strong></li>
<li><strong>2. Qh5</strong> \u2014 the queen comes out early, threatening e5</li>
<li><strong>2...Nc6</strong> \u2014 Black defends e5</li>
<li><strong>3. Bc4</strong> \u2014 the bishop aims at f7</li>
<li><strong>3...Nf6??</strong> \u2014 the fatal mistake! Black attacks the queen but\u2026</li>
<li><strong>4. Qxf7#</strong> \u2014 Checkmate! The queen takes f7 protected by the bishop on c4. The king cannot escape.</li>
</ol>
<p><strong>How to defend:</strong> After 3.Bc4, instead of Nf6, play <strong>3...g6!</strong> (chasing the queen away) or <strong>3...Qe7</strong> (defending f7). Remember: if your opponent brings the queen out early, they\u2019re violating opening principles \u2014 exploit that!</p>
<h3>Trap 2: L\u00e9gal\u2019s Trap</h3>
<p>Named after the 18th-century French player L\u00e9gal:</p>
<ol>
<li><strong>1. e4 e5 2. Nf3 d6 3. Bc4 Bg4</strong> \u2014 Black pins the knight to the queen</li>
<li><strong>4. Nc3 g6?</strong> \u2014 Black\u2019s mistake</li>
<li><strong>5. Nxe5!</strong> \u2014 the knight takes the pawn! If Black takes the queen (Bxd1)\u2026</li>
<li><strong>6. Bxf7+ Ke7 7. Nd5#</strong> \u2014 a beautiful checkmate!</li>
</ol>
<p><strong>The lesson:</strong> Don\u2019t always take the queen \u2014 sometimes it\u2019s a trap! Before you capture a "free" major piece, ask yourself: why did they leave it there?</p>
<h3>Trap 3: The Elephant Trap</h3>
<p>Occurs in the Queen\u2019s Gambit Accepted:</p>
<ol>
<li><strong>1. d4 d5 2. c4 dxc4 3. e3 b5?!</strong></li>
<li><strong>4. a4 c6 5. axb5 cxb5 6. Qf3</strong> \u2014 attacks the rook on a8</li>
<li><strong>6...Nc6! 7. Qxc6+? Bd7!</strong> \u2014 the bishop reveals a discovered attack on the queen!</li>
<li><strong>8. Qc7? Qc8!</strong> \u2014 Black traps the queen</li>
</ol>
<p><strong>The lesson:</strong> Greed in chess is dangerous. Sometimes a "gift" is a trap because your opponent knows you\u2019ll take it.</p>
<h3>Golden Rule Against Traps</h3>
<p>Before capturing any piece that looks free, ask these three questions:</p>
<ol>
<li>Why did my opponent leave this piece unprotected?</li>
<li>What can they play after I take it?</li>
<li>Is there a check, fork, or pin waiting after my capture?</li>
</ol>
`,
        fen: 'r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4',
        highlights: ['f7', 'c4'],
        arrows: [['c4','f7'],['f7','e8']],
        commonMistake: 'Two big errors: First \u2014 not knowing Scholar\u2019s Mate and falling for it. Second (and worse) \u2014 knowing it and trying it every game! Bringing the queen out early violates opening principles. If your opponent knows the defense, you\u2019ll be in a bad position with an exposed queen and undeveloped pieces.',
        analogy: 'Traps are like ambushes in warfare. A smart army knows the locations of famous ambush sites and avoids them. An even smarter one sets its own ambushes. Learning traps doesn\u2019t mean you\u2019ll use them every game \u2014 but it means you\u2019ll never fall for them, and occasionally you\u2019ll catch an unsuspecting opponent.',
        practice: 'Exercise 1: On lichess.org/analysis, reconstruct Scholar\u2019s Mate move by move and learn the defense (g6 after Bc4). Exercise 2: Try L\u00e9gal\u2019s Trap in 3 games \u2014 even if it doesn\u2019t work, you\u2019ll learn to think tactically. Exercise 3: Play 5 games and every time you find a "free" piece, pause for 10 seconds and ask the three golden questions.',
        quiz: [
          {
            question: 'Your opponent plays 1.e4 e5 2.Qh5 Nc6 3.Bc4. What\u2019s the best defense?',
            options: [
              'Nf6 to attack the queen',
              'Ke7 to protect f7 with the king',
              'g6 to chase the queen away and protect f7',
              'a6 to prevent castling'
            ],
            correct: 2,
            explanation: 'g6 chases the queen away, protects f7, and gains time. After g6 the queen is forced to retreat and Black gains a lead in development. Nf6 looks logical but allows Qxf7# checkmate!'
          }
        ]
      }
    ]
  },
  // ========================================================================
  // PHASE 3: Tactics (PAID)
  // ========================================================================
  {
    id: 'phase-3',
    title: 'Tactics',
    subtitle: 'Your secret weapon in every game',
    free: false,
    color: '#e74c3c',
    concepts: [
      // ----------------------------------------------------------------------
      // 3-1  The Fork
      // ----------------------------------------------------------------------
      {
        id: 'fork',
        title: 'The Fork',
        icon: '\uD83C\uDF74',
        content: `
<h3>One Piece Attacks Two Targets</h3>
<p>The fork is the most famous and most devastating tactic in chess. The idea is simple: one piece attacks two (or more) targets simultaneously. The opponent cannot save both \u2014 so one of them is lost.</p>
<h3>The Knight Fork \u2014 The Deadliest</h3>
<p>The knight is the best forking piece for two reasons: first, it jumps over pieces so it\u2019s hard to block. Second, no piece (except another knight) can attack it "from a distance" on its line of movement. The most famous knight fork is the "family fork" \u2014 the knight attacks the king and queen at the same time. The opponent is forced to move the king (because it\u2019s in check), and you take the queen for free!</p>
<h3>Types of Forks</h3>
<ul>
<li><strong>Knight fork:</strong> The most common and dangerous. A knight on e2 attacks both the king on g1 and the rook on c1, for instance.</li>
<li><strong>Pawn fork:</strong> A pawn advances and attacks two pieces diagonally. Cheap but devastating!</li>
<li><strong>Queen fork:</strong> The queen attacks two targets \u2014 for example, the king and a rook.</li>
<li><strong>Bishop fork:</strong> The bishop attacks two targets on the same diagonal.</li>
<li><strong>Rook fork:</strong> The rook attacks two targets on the same rank or file.</li>
</ul>
<h3>How to Find Forks</h3>
<p>On every move, ask yourself:</p>
<ol>
<li>Is there a square my knight can reach that attacks two pieces at once?</li>
<li>Can I advance a pawn to attack two pieces diagonally?</li>
<li>Can my queen reach a square that attacks the king and another piece?</li>
</ol>
<p>With practice, your eye will catch forking opportunities automatically. It\u2019s like learning to drive \u2014 at first you think about every movement, but later it becomes instinct.</p>
<h3>How to Avoid Being Forked</h3>
<ul>
<li>Don\u2019t place two valuable pieces on squares reachable by your opponent\u2019s knight.</li>
<li>Watch for enemy knights approaching the center \u2014 that\u2019s where they\u2019re most dangerous.</li>
<li>If you see your opponent\u2019s knight moving closer, think: what can it attack from the next square?</li>
</ul>
`,
        fen: 'r1bqk2r/pppp1ppp/2n2n2/2b1p3/4P3/2N2N1P/PPPP1PP1/R1BQKB1R w KQkq - 0 5',
        highlights: ['c3', 'e5'],
        arrows: [],
        additionalPositions: [
          {
            title: 'Family fork \u2014 knight attacks king and queen',
            fen: 'r2qk2r/ppp2ppp/2n1b3/3Nn3/8/8/PPPP1PPP/R1BQKB1R w KQkq - 0 1',
            highlights: ['d5', 'e8', 'c7'],
            arrows: [['d5','c7'],['d5','e7']]
          },
          {
            title: 'Pawn fork \u2014 a pawn attacks a knight and a bishop',
            fen: 'r1bqkbnr/ppp2ppp/2n5/3pp3/4P3/3P4/PPP2PPP/RNBQKBNR w KQkq - 0 4',
            highlights: ['d5', 'e4'],
            arrows: []
          }
        ],
        commonMistake: 'Beginners only see forks when they happen to them \u2014 they never look for forks in their own moves. The fix: before every move, spend 5 seconds checking if any of your pieces can fork something. Over time you\u2019ll spot forks at lightning speed.',
        analogy: 'A fork is like a thief running between two people holding wallets. Each person can only protect their own wallet \u2014 and the thief snatches the other one. In chess, your piece is the "thief" and the opponent\u2019s two pieces are the "wallets." They can\u2019t save both!',
        practice: 'On lichess.org/training, select the "fork" theme and solve 20 puzzles. Focus especially on knight forks. After each puzzle, even if you solved it correctly, read the solution and make sure you understand "why" not just "what."',
        quiz: [
          {
            question: 'Why is the knight fork the most dangerous?',
            options: [
              'Because the knight is the strongest piece',
              'Because the knight jumps over pieces and cannot be blocked from a distance',
              'Because the knight moves in a straight line',
              'Because the knight cannot be captured'
            ],
            correct: 1,
            explanation: 'The knight jumps over pieces so you can\u2019t put a blocker in its way. Also, its L-shaped movement means no other piece (except another knight) can attack it from the same distance. This makes knight forks very hard to avoid.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 3-2  The Pin
      // ----------------------------------------------------------------------
      {
        id: 'pin',
        title: 'The Pin',
        icon: '\uD83D\uDCCC',
        content: `
<h3>A Paralyzed Piece That Cannot Move</h3>
<p>A pin occurs when you attack an opponent\u2019s piece that cannot move because a more valuable piece stands behind it. The pinned piece is "paralyzed" \u2014 it\u2019s on the board but it doesn\u2019t work. This is a powerful tactic because you\u2019re disabling an entire piece without capturing it.</p>
<h3>Types of Pins</h3>
<p><strong>Absolute pin:</strong> The pinned piece cannot legally move because the king is behind it. Example: a bishop on g5 attacks a knight on f6, and the king is on e7 behind it. The knight cannot move because that would expose the king to check \u2014 which is illegal.</p>
<p><strong>Relative pin:</strong> The piece can legally move, but doing so would be unwise because a valuable piece is behind it. Example: a rook on e1 pins a bishop on e4 with the queen on e7 behind it. The bishop can move, but then the rook takes the queen \u2014 a huge loss.</p>
<h3>Who Can Pin?</h3>
<p>Only long-range pieces can create pins:</p>
<ul>
<li><strong>Bishop:</strong> Pins along diagonals \u2014 the most common</li>
<li><strong>Rook:</strong> Pins along files and ranks</li>
<li><strong>Queen:</strong> Pins along diagonals, files, and ranks</li>
</ul>
<p>The knight, pawn, and king <strong>cannot create pins</strong> \u2014 they don\u2019t move along long lines.</p>
<h3>How to Exploit a Pin</h3>
<p>When you pin a piece, you can:</p>
<ol>
<li><strong>Pile up on the pinned piece with other attackers:</strong> Since it can\u2019t move, stack multiple attacks on it until you win it.</li>
<li><strong>Attack the squares it was defending:</strong> Since it\u2019s paralyzed, the squares it used to protect are now unguarded.</li>
<li><strong>Open other lines:</strong> While your opponent deals with the pin, attack elsewhere.</li>
</ol>
<h3>How to Escape a Pin</h3>
<ul>
<li><strong>Move the piece behind:</strong> If you move the king or queen (the piece behind the pinned one), the pin disappears.</li>
<li><strong>Interpose a piece:</strong> Place a piece between the pinned piece and the attacker.</li>
<li><strong>Attack the pinner:</strong> Threaten the piece creating the pin to force it to retreat.</li>
<li><strong>Close the line:</strong> Place a pawn blocking the line between the pinner and the pinned piece.</li>
</ul>
`,
        fen: 'r1bqkb1r/pppppppp/2n2n2/8/3PP3/6B1/PPP2PPP/RN1QKBNR b KQkq - 0 4',
        highlights: ['g5', 'f6'],
        arrows: [['g5','f6'],['f6','d8']],
        additionalPositions: [
          {
            title: 'Absolute pin \u2014 the knight cannot move',
            fen: 'rnbqk1nr/pppp1ppp/8/4p3/1b2P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3',
            highlights: ['b4', 'c3', 'e1'],
            arrows: [['b4','c3'],['c3','e1']]
          },
          {
            title: 'Relative pin \u2014 the bishop pins the rook against the queen',
            fen: 'r2qkb1r/ppp2ppp/2n1bn2/3pp3/4P1B1/2NP1N2/PPP2PPP/R2QKB1R b KQkq - 0 5',
            highlights: ['g4', 'f3'],
            arrows: [['g4','e2']]
          }
        ],
        commonMistake: 'Beginners get pinned and don\u2019t know how to escape. They leave the pinned piece sitting there for many moves while the opponent piles up attacks. Remember: a pin is a problem that must be solved immediately \u2014 don\u2019t let it fester. Also a common error: forgetting that an absolute pin (behind it is the king) prevents movement legally, then trying to move the piece and discovering you can\u2019t!',
        analogy: 'A pin is like a bodyguard tied to a rope. The bodyguard (the pinned piece) wants to move and help, but they can\u2019t because if they move, the person they\u2019re protecting (the king or queen) will be exposed. The bodyguard is paralyzed \u2014 physically present but functionally useless.',
        practice: 'On lichess.org/training, select the "pin" theme and solve 15 puzzles. Notice the difference between absolute and relative pins. In your next games, look for pinning opportunities with your bishop \u2014 especially Bg5 (pinning the knight on f6 to the queen on d8) and Bb5 (pinning the knight on c6 to the king on e8).',
        quiz: [
          {
            question: 'What is the difference between an absolute and a relative pin?',
            options: [
              'No difference',
              'Absolute is in the opening and relative is in the endgame',
              'Absolute is for rooks and relative is for bishops',
              'Absolute: the piece cannot legally move (king behind it). Relative: it can move but at a cost (valuable piece behind it)'
            ],
            correct: 3,
            explanation: 'In an absolute pin, the piece behind the pinned one is the king \u2014 so moving is illegal. In a relative pin, the piece behind is valuable (like the queen) \u2014 moving is legal but would cost major material.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 3-3  The Skewer
      // ----------------------------------------------------------------------
      {
        id: 'skewer',
        title: 'The Skewer',
        icon: '\uD83D\uDD2A',
        content: `
<h3>The Reverse Pin \u2014 The Big Target Is in Front</h3>
<p>A skewer is the opposite of a pin. In a pin, the less valuable piece is in front and the more valuable one is behind. In a skewer, the more valuable piece is in front, and when it moves (or is forced to move), the less valuable piece behind it is exposed and captured.</p>
<h3>How Does It Work?</h3>
<p>Imagine this position: your bishop attacks the opponent\u2019s king. The king is forced to move (because it\u2019s in check). Behind the king sits a rook. After the king moves, your bishop captures the rook. That\u2019s a skewer \u2014 the more valuable king was forced to move, exposing the rook.</p>
<h3>Most Common Skewers</h3>
<ul>
<li><strong>King-Rook skewer:</strong> Attack the king with a bishop or queen; the king escapes; you take the rook. The most common skewer.</li>
<li><strong>King-Queen skewer:</strong> Attack the king; the king escapes; you take the queen. Devastating!</li>
<li><strong>Queen-Rook skewer:</strong> Attack the queen with a rook or bishop; the queen escapes; you take the rook.</li>
</ul>
<h3>Rook Skewer</h3>
<p>The rook can create skewers along files and ranks. For example: your rook on a1, the opponent\u2019s king on a4, their rook on a8. Your rook gives check, the king moves, and your rook takes their rook. This happens frequently in endgames.</p>
<h3>Bishop Skewer</h3>
<p>The bishop creates skewers along diagonals. For example: your bishop on a1, the opponent\u2019s king on d4, their rook on g7 on the same diagonal. Check from the bishop, the king moves, the bishop takes the rook.</p>
<h3>Pin vs. Skewer</h3>
<table>
<tr><th>Pin</th><th>Skewer</th></tr>
<tr><td>Less valuable piece in front</td><td>More valuable piece in front</td></tr>
<tr><td>Front piece is paralyzed</td><td>Front piece is forced to move</td></tr>
<tr><td>Gain: disabling or winning the front piece</td><td>Gain: capturing the piece behind</td></tr>
</table>
<h3>How to Avoid Skewers</h3>
<p>Don\u2019t place two valuable pieces on the same line (diagonal, file, or rank) if your opponent has a piece that can attack along that line. Especially in endgames, watch the relationship between your king and your rook \u2014 don\u2019t put them on the same diagonal.</p>
`,
        fen: '4k3/8/8/8/1b6/8/8/R3K2R w KQ - 0 1',
        highlights: ['b4'],
        arrows: [['b4','e1'],['b4','h1']],
        additionalPositions: [
          {
            title: 'Rook skewer \u2014 the king is forced to move and the rook is taken',
            fen: '4k3/8/8/8/8/8/8/R3K2r w Q - 0 1',
            highlights: ['a1', 'e1'],
            arrows: [['a1','e1'],['a1','h1']]
          },
          {
            title: 'Bishop skewer \u2014 the queen is forced to move',
            fen: '2k5/8/4q3/8/8/7B/8/4K3 w - - 0 1',
            highlights: ['h3', 'e6', 'c8'],
            arrows: [['h3','e6'],['h3','c8']]
          }
        ],
        commonMistake: 'Beginners confuse the skewer with the pin. The simple rule: if the front piece is the more valuable one = skewer. If the back piece is the more valuable one = pin. Also, many players don\u2019t notice when two of their pieces are on the same line \u2014 leaving them vulnerable to a skewer.',
        analogy: 'A skewer is like a robber threatening a VIP (say, a minister) with a gun. The VIP runs because their life comes first \u2014 but behind them was a briefcase full of money. The robber grabs the briefcase. The real target was never the VIP \u2014 it was what was behind them.',
        practice: 'On lichess.org/training, select the "skewer" theme and solve 15 puzzles. Notice that most skewers happen in endgames when pieces are few and lines are open. In your games, pay attention to your king and rook positions \u2014 are they on the same diagonal? Danger!',
        quiz: [
          {
            question: 'Your bishop on a2 attacks the opponent\u2019s king on d5, and behind the king is a rook on g8 on the same diagonal. What tactic is this?',
            options: ['Pin', 'Fork', 'Skewer', 'Discovered attack'],
            correct: 2,
            explanation: 'This is a skewer because the more valuable piece (king) is in front. The king is forced to move (check), revealing the target behind it (rook), which gets captured.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 3-4  The Discovered Attack
      // ----------------------------------------------------------------------
      {
        id: 'discovered-attack',
        title: 'The Discovered Attack',
        icon: '\uD83D\uDCA5',
        content: `
<h3>The Piece Moves \u2014 The Danger Comes from Behind</h3>
<p>A discovered attack happens when you move a piece and reveal an attack from another piece that was behind it. The moving piece "opens the door" for the piece behind it to strike. The result: two attacks in a single move!</p>
<h3>How Does It Work?</h3>
<p>Imagine this: your rook is on e1 and your knight is on e4 in front of it. The opponent\u2019s king is on e8. If you move the knight to any square (say f6), the rook reveals an attack on the king (discovered check!). Meanwhile, the knight on f6 might attack something else. That gives you two threats from one move.</p>
<h3>Discovered Check \u2014 The Strongest Kind</h3>
<p>When the discovered attack is a check (i.e., the unveiled piece attacks the king), it\u2019s called a "discovered check" and it\u2019s devastating. Why? Because the opponent is forced to deal with the check first \u2014 while the moving piece does whatever it wants with complete freedom. It can capture the queen, take a rook, or go to a seemingly random square \u2014 because the opponent is too busy dealing with the check to respond.</p>
<h3>Famous Examples</h3>
<p><strong>Example 1:</strong> Bishop on c1, knight on d2. If you move the knight to f3 (or any square), the bishop reveals an attack along the other end of its diagonal.</p>
<p><strong>Example 2:</strong> Rook on d1, bishop on d5 in front of it. If you move the bishop to any square, the rook reveals an attack on the entire d-file \u2014 perhaps hitting the opponent\u2019s king or queen.</p>
<h3>How to Set Up a Discovered Attack</h3>
<ol>
<li>Look for two of your pieces on the same line (diagonal, file, or rank).</li>
<li>The front piece must be able to move away.</li>
<li>The back piece must attack a valuable target when the line opens.</li>
<li>The moving piece should go to a useful square (attacking something or improving its position).</li>
</ol>
<h3>How to Avoid Discovered Attacks</h3>
<p>Watch for your opponent\u2019s pieces lined up on the same line. If you see a rook behind a knight, or a bishop behind a pawn, ask yourself: what happens if the front piece moves? This awareness saves you from many disasters.</p>
`,
        fen: 'rn1qkbnr/ppp1pppp/8/3p4/3P2b1/5N2/PPP1PPPP/RNBQKB1R w KQkq - 2 3',
        highlights: ['f3', 'g4'],
        arrows: [],
        additionalPositions: [
          {
            title: 'Discovered check \u2014 the knight moves and the bishop reveals check',
            fen: 'rnbqk2r/pppp1ppp/5n2/4N3/1b2P3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 4',
            highlights: ['e5'],
            arrows: []
          },
          {
            title: 'Discovered attack \u2014 the pawn advances and the rook attacks',
            fen: 'r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4',
            highlights: ['e4'],
            arrows: []
          }
        ],
        commonMistake: 'Beginners don\u2019t look at what\u2019s behind the piece that\u2019s moving \u2014 they focus only on the piece itself. The rule: before every move, check what\u2019s behind the piece you\u2019re about to move. Is there a piece behind it that will reveal an attack? This applies to both your pieces (opportunities) and your opponent\u2019s (dangers).',
        analogy: 'A discovered attack is like someone standing in front of a cannon. When the person steps aside, the cannon fires at the target. The person stepping aside isn\u2019t the real threat \u2014 the cannon behind them is. And the most dangerous part: the person who stepped aside can attack something else at the same time!',
        practice: 'On lichess.org/training, select "discoveredAttack" and solve 15 puzzles. Focus on understanding the difference between a regular discovered attack and a discovered check. In your games, whenever you line up two pieces on the same line, think: can I create a discovered attack?',
        quiz: [
          {
            question: 'What is the difference between a discovered attack and a discovered check?',
            options: [
              'In a discovered check, the unveiled piece attacks the king \u2014 so the opponent must deal with the check first',
              'Discovered check is weaker',
              'No difference',
              'A discovered attack requires a queen'
            ],
            correct: 0,
            explanation: 'In a discovered check, the check forces the opponent to defend immediately \u2014 giving the moving piece total freedom to capture whatever it wants. This makes discovered check much stronger than a regular discovered attack.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 3-5  The Sacrifice
      // ----------------------------------------------------------------------
      {
        id: 'sacrifice',
        title: 'The Sacrifice',
        icon: '\uD83C\uDFAF',
        content: `
<h3>A Temporary Loss for a Permanent Gain</h3>
<p>A sacrifice in chess means deliberately giving up a piece (or more) in exchange for a greater advantage. It might seem crazy \u2014 why hand your opponent a free piece? \u2014 but a calculated sacrifice is one of the most beautiful and powerful weapons in chess.</p>
<h3>Why Do We Sacrifice?</h3>
<ul>
<li><strong>Checkmate:</strong> The strongest reason. Sacrificing a queen for checkmate is always worth it.</li>
<li><strong>Winning more material:</strong> Give up a small piece to win a bigger one later.</li>
<li><strong>Destroying the king\u2019s shelter:</strong> Sacrifice a piece to remove the pawns protecting the king and open attack lines.</li>
<li><strong>Gaining time:</strong> Sacrifice a pawn to speed up development (the gambit).</li>
<li><strong>Enabling a discovered attack:</strong> Sacrifice a piece to reveal a more powerful attack from behind it.</li>
</ul>
<h3>The Pawn Sacrifice (Gambit)</h3>
<p>The simplest type. In many openings, White offers a pawn in exchange for rapid development and better activity. Example: the King\u2019s Gambit (1.e4 e5 2.f4) \u2014 White sacrifices the f-pawn to open lines on the kingside.</p>
<h3>The Minor Piece Sacrifice</h3>
<p>Sacrificing a knight or bishop is more serious. It usually happens to destroy the opponent\u2019s pawn structure around their king. Classic example: the Greek Gift sacrifice \u2014 Bxh7+! The bishop takes the h7 pawn with check. After Kxh7, a lethal attack follows with the knight and queen.</p>
<h3>The Rook or Queen Sacrifice</h3>
<p>These are big, scary sacrifices \u2014 but they occur in the most beautiful games in history. The goal is usually direct checkmate or an unstoppable attack. One of the most famous examples: Adolf Anderssen\u2019s "Immortal Game" (1851), where he sacrificed two bishops, two rooks, and the queen to deliver a brilliant checkmate!</p>
<h3>When NOT to Sacrifice</h3>
<ul>
<li>If you haven\u2019t calculated the consequences precisely \u2014 a random sacrifice isn\u2019t bravery, it\u2019s recklessness.</li>
<li>If there\u2019s a simpler way to achieve the same goal.</li>
<li>If the opponent can decline the sacrifice without problems.</li>
</ul>
<h3>The Golden Rule</h3>
<p>Before any sacrifice, ask: what do I get in return for this piece? If the answer is clear and specific (checkmate, material gain, or an overwhelming attack), the sacrifice is sound. If the answer is vague ("it looks like it could be good"), it\u2019s probably a mistake.</p>
`,
        fen: 'r1bq1rk1/pppp1ppp/2n2n2/2b1p1B1/2B1P3/3P1N2/PPP2PPP/RN1Q1RK1 w - - 0 7',
        highlights: ['g5', 'h7'],
        arrows: [['c4','h7']],
        additionalPositions: [
          {
            title: 'The Greek Gift \u2014 Bxh7+ launches a lethal attack',
            fen: 'r1bq1rk1/pppn1ppp/4pn2/3p2B1/1b1P4/2NBP3/PP3PPP/R2QK1NR w KQ - 0 7',
            highlights: ['d3', 'h7'],
            arrows: [['d3','h7']]
          },
          {
            title: 'Pawn sacrifice (gambit) \u2014 a pawn for rapid development',
            fen: 'rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq f3 0 2',
            highlights: ['f4', 'e5'],
            arrows: [['f4','e5']]
          }
        ],
        commonMistake: 'Beginners sacrifice pieces without calculation \u2014 "it looks like a strong attack" is not a good enough reason! A sacrifice needs precise calculation. Ask: what are the forced moves after the sacrifice? Can I maintain the attack? What if the opponent declines? If you can\u2019t find clear answers, don\u2019t sacrifice.',
        analogy: 'A sacrifice is like a financial investment. You pay money now (lose a piece) to earn a greater return later (checkmate or material gain). A smart investor doesn\u2019t throw money around randomly \u2014 they study and calculate the expected return. Same thing in chess.',
        practice: 'On lichess.org/training, select "sacrifice" and solve 15 puzzles. For each puzzle, try to understand "why" the sacrifice works \u2014 what did the sacrificing side get in return? Also watch "The Immortal Game" by Anderssen on YouTube \u2014 one of the most beautiful games in history.',
        quiz: [
          {
            question: 'What is the most important reason for a sacrifice in chess?',
            options: [
              'To scare the opponent',
              'To gain checkmate or an advantage greater than the sacrificed piece',
              'To get rid of a piece you don\u2019t need',
              'Because sacrifices look beautiful'
            ],
            correct: 1,
            explanation: 'A sacrifice is not an end in itself \u2014 the goal is to gain something of greater value. Checkmate is worth more than any piece, and an overwhelming attack may justify sacrificing a knight or bishop. But sacrificing without a clear reason is just losing material.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 3-6  Back-Rank Mate
      // ----------------------------------------------------------------------
      {
        id: 'back-rank-mate',
        title: 'Back-Rank Mate',
        icon: '\uD83C\uDFC1',
        content: `
<h3>The King Trapped Behind Its Own Pawns</h3>
<p>Back-rank mate is one of the most famous checkmate patterns and one of the most frequent \u2014 even among advanced players! It happens when the king is trapped on the back rank (rank 1 for White or rank 8 for Black) behind its own pawns, and an opposing rook or queen delivers check along that rank. The king cannot escape because its own pawns block the way!</p>
<h3>Why Does It Happen So Often?</h3>
<p>After castling, the typical structure is: king on g1 (or g8), pawns on f2, g2, h2. These pawns protect the king \u2014 but they also imprison it. If there\u2019s no "escape hatch" (a free square in front of the pawns), any check on the first rank will be checkmate.</p>
<h3>A Typical Example</h3>
<p>White: king g1, pawns f2 g2 h2, rook e1. Black: king g8, pawns f7 g7 h7, rook d8. If Black plays Rd1! \u2014 that\u2019s a check on the first rank. White\u2019s king on g1 can\u2019t go anywhere \u2014 f2, g2, h2 are occupied by its own pawns. The rook on e1 can capture\u2026 but what if Black has a second rook? Rd1 Rxd1 Re1# \u2014 the second rook finishes the checkmate!</p>
<h3>How to Attack with Back-Rank Mate</h3>
<ol>
<li>Look for the opponent\u2019s king trapped behind its pawns without an escape square.</li>
<li>Place your rook (or queen) on an open file that reaches the back rank.</li>
<li>Make sure the opponent can\u2019t block the check (with a piece) or capture the attacker.</li>
<li>Sometimes you need a sacrifice to remove the defending piece \u2014 e.g., capturing the guarding rook.</li>
</ol>
<h3>How to Protect Yourself from Back-Rank Mate</h3>
<p><strong>Luft (Air Hole):</strong> The most important defense is creating an escape square for the king. A simple move like <strong>h3</strong> (or h6 for Black) opens the h2 square for the king to flee to. This small move could save you from checkmate! Many advanced players play h3 "prophylactically" even when there\u2019s no immediate threat.</p>
<p><strong>Other defenses:</strong></p>
<ul>
<li>Keep a rook on the back rank for defense</li>
<li>Don\u2019t move all your pieces away from the first rank</li>
<li>If attacking with both rooks, make sure your king is safe first</li>
</ul>
`,
        fen: '3r2k1/5ppp/8/8/8/8/5PPP/3R2K1 b - - 0 1',
        highlights: ['d1', 'g1', 'f2', 'g2', 'h2'],
        arrows: [['d8','d1']],
        additionalPositions: [
          {
            title: 'Back-rank mate with the rook',
            fen: '6k1/5ppp/8/8/8/8/5PPP/r5K1 w - - 0 1',
            highlights: ['a1', 'g1'],
            arrows: [['a1','g1']]
          },
          {
            title: 'Luft (h3) prevents back-rank mate',
            fen: '3r2k1/5ppp/8/8/8/7P/5PP1/3R2K1 b - - 0 1',
            highlights: ['h3', 'h2'],
            arrows: [['g1','h2']]
          }
        ],
        commonMistake: 'Beginners completely forget about back-rank safety. They attack with all their pieces and leave no defense on the first rank. Then the opponent slides a rook in and delivers a free checkmate. The rule: before starting your attack, play h3 (or g3) to give your king an escape hatch. This one prophylactic move saves you from many disasters.',
        analogy: 'Imagine a person in a room who locked the door and sat behind it. If a car crashes into the door, they can\u2019t escape \u2014 the walls (pawns) trap them and the door is sealed. The "luft" (h3) is like a back door they can escape through if danger arrives.',
        practice: 'On lichess.org/training, select "backRankMate" and solve 15 puzzles. You\u2019ll notice many require a sacrifice (removing a defensive piece) before delivering the back-rank checkmate. In every game from now on, ask yourself: is my king safe from back-rank mate? Should I play h3 now?',
        quiz: [
          {
            question: 'What is the simplest way to protect your king from back-rank mate?',
            options: [
              'Never castle',
              'Keep the queen next to the king always',
              'Play h3 (or h6 for Black) to create an escape square for the king',
              'It\u2019s impossible to prevent'
            ],
            correct: 2,
            explanation: 'The move h3 (called "luft" from the German word for "air") opens the h2 square as an emergency exit for the king. This is the simplest and most effective defense \u2014 a small move that saves you from a potential checkmate.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 3-7  The Double Attack
      // ----------------------------------------------------------------------
      {
        id: 'double-attack',
        title: 'The Double Attack',
        icon: '\u2694',
        content: `
<h3>Two Threats Are Better Than One</h3>
<p>The double attack is the general principle behind all tactics: <strong>create two threats at the same time</strong>. Your opponent can handle one threat \u2014 but they can\u2019t handle two. This is the very essence of chess tactics.</p>
<h3>How Is It Different from a Fork?</h3>
<p>A fork is a specific type of double attack: one piece attacking two targets. But the double attack is broader \u2014 it can include:</p>
<ul>
<li>A piece attacking two targets (fork)</li>
<li>A move that threatens checkmate AND captures a piece</li>
<li>A move that threatens pawn promotion AND captures a piece</li>
<li>A discovered check (the moving piece attacks + the unveiled piece checks)</li>
</ul>
<h3>Common Patterns</h3>
<p><strong>1. Checkmate threat + piece capture:</strong> Your queen threatens mate on h7 while simultaneously attacking the opponent\u2019s rook on a4. The opponent must stop the mate \u2014 and you take the rook.</p>
<p><strong>2. Promotion threat + check:</strong> Your pawn on the 7th rank is about to promote. You play a move that gives check. The opponent deals with the check \u2014 and your pawn promotes.</p>
<p><strong>3. Attacking the overloaded defender:</strong> If a single piece is defending two things, attack it. When it moves to defend one, it abandons the other. This is called "overloading."</p>
<h3>How to Create a Double Attack</h3>
<ol>
<li><strong>Find the targets:</strong> What pieces are undefended? What squares are weak?</li>
<li><strong>Find the magic square:</strong> Is there a square your piece can reach that threatens two things?</li>
<li><strong>Prepare:</strong> Sometimes you need a preparatory move (chasing away a defender, opening a line) before the double attack.</li>
<li><strong>Execute:</strong> Play the move that creates two threats.</li>
</ol>
<h3>The Core Principle</h3>
<p>Every successful tactic in chess relies on the double-threat idea. Forks, pins, skewers, discovered attacks \u2014 they\u2019re all different forms of the same principle: create two problems the opponent can\u2019t solve simultaneously. If you deeply understand this principle, you\u2019ve understood the heart of tactics.</p>
`,
        fen: 'r3k2r/ppp2ppp/2n1bn2/3qp3/3P4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 0 8',
        highlights: [],
        arrows: [],
        additionalPositions: [
          {
            title: 'Mate threat + piece capture',
            fen: 'r4rk1/ppp2ppp/2n1bn2/3q4/6Q1/2NBP3/PP3PPP/R1B1K2R w KQ - 0 10',
            highlights: ['g4', 'g7', 'd7'],
            arrows: [['g4','g7'],['g4','d7']]
          },
          {
            title: 'Overloading \u2014 one piece defending two things',
            fen: 'r1b1k2r/pppp1ppp/2n2n2/2b1p3/2B1P1q1/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 6',
            highlights: [],
            arrows: []
          }
        ],
        commonMistake: 'Beginners play moves that "threaten one thing" \u2014 the opponent defends easily and nothing happens. The secret: always look for moves that create two threats. Even if you can\u2019t find an immediate tactic, a move that threatens two things is far better than one that threatens only one.',
        analogy: 'Imagine a goalkeeper. If you shoot one ball, they\u2019ll save it most of the time. But if two balls come at the same moment \u2014 one to the left and one to the right \u2014 they\u2019ll save one and the other goes in. That\u2019s exactly what a double attack does in chess.',
        practice: 'In every game you play this week, try to find at least one double attack. Before each move ask: does this move threaten one thing or two? If it only threatens one, look for a better move. This kind of thinking will raise your level quickly.',
        quiz: [
          {
            question: 'What principle is shared by the fork, pin, skewer, and discovered attack?',
            options: [
              'They all require a queen',
              'They only happen in endgames',
              'They all depend on the knight',
              'They all create two or more threats the opponent cannot handle simultaneously'
            ],
            correct: 3,
            explanation: 'All tactics are based on the same principle: two threats are better than one. Fork = one piece attacks two targets. Pin = a piece is paralyzed and attacked. Skewer = two pieces on one line. Discovered attack = two threats from one move.'
          }
        ]
      }
    ]
  },
  // ========================================================================
  // PHASE 4: The Middlegame (PAID)
  // ========================================================================
  {
    id: 'phase-4',
    title: 'The Middlegame',
    subtitle: 'Where victories are forged',
    free: false,
    color: '#9b59b6',
    concepts: [
      // ----------------------------------------------------------------------
      // 4-1  The Thinking System
      // ----------------------------------------------------------------------
      {
        id: 'thinking-system',
        title: 'The Thinking System',
        icon: '\uD83E\uDDE0',
        content: `
<h3>How Does a Chess Champion Think?</h3>
<p>The biggest difference between a beginner and an advanced player isn\u2019t the number of moves they\u2019ve memorized \u2014 it\u2019s their <strong>thought process</strong>. A beginner sees a piece and moves it with no plan. An advanced player follows a clear system before every move. You can learn this system right now, and it will change your level dramatically.</p>
<h3>The 4-Step System: TCCD</h3>
<p><strong>Step 1: Threats</strong></p>
<p>Before you think about your own move, ask: <strong>What is my opponent threatening?</strong> This is the most important question in chess. Many games are lost because a player missed the opponent\u2019s threat. Check:</p>
<ul>
<li>Are they threatening to capture one of my pieces?</li>
<li>Are they threatening check or checkmate?</li>
<li>Are they setting up a pin or fork?</li>
<li>Are they preparing an attack on my king?</li>
</ul>
<p><strong>Step 2: Candidates</strong></p>
<p>After understanding your opponent\u2019s threats, generate a list of 3\u20135 candidate moves. Don\u2019t play the first move that comes to mind \u2014 consider several options. Typically candidates include:</p>
<ul>
<li>An attacking move (threatening a piece or creating a threat)</li>
<li>A defensive move (stopping the opponent\u2019s threat)</li>
<li>An improving move (enhancing a piece\u2019s position)</li>
</ul>
<p><strong>Step 3: Calculate</strong></p>
<p>For each candidate move, calculate: what does my opponent play next? Then what do I play? Try to see 2\u20133 moves ahead for each candidate. You don\u2019t need to calculate 10 moves \u2014 at beginner and intermediate levels, seeing 2\u20133 moves ahead is enough to win.</p>
<p><strong>Step 4: Decide</strong></p>
<p>Compare the candidates and choose the best one. Ask yourself:</p>
<ul>
<li>Which move improves my position the most?</li>
<li>Which move creates the most problems for my opponent?</li>
<li>Which move doesn\u2019t weaken my king or pawn structure?</li>
</ul>
<h3>The "Checks First" Rule</h3>
<p>When calculating, always start by asking: can I give check? Then: can I capture something? Then: can I create a threat? Checks, captures, and threats are "forcing moves" that limit the opponent\u2019s options and make your calculation easier.</p>
<h3>The Biggest Thinking Mistake</h3>
<p>The biggest error is "tunnel vision" \u2014 thinking only about your own moves and forgetting that your opponent also plays! After every move you consider, <strong>ask: what will my opponent play?</strong> Then answer that question before continuing. Many "surprises" in chess aren\u2019t real surprises \u2014 they\u2019re natural moves the player simply didn\u2019t think about.</p>
`,
        fen: 'r1bq1rk1/ppp2ppp/2n1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQ1RK1 w - - 0 8',
        highlights: [],
        arrows: [],
        commonMistake: 'The most dangerous mistake: playing the first move that comes to mind without checking your opponent\u2019s threats. This is called "blitzing" and it\u2019s the #1 reason for losing games. Even if your move is good, if you missed your opponent\u2019s threat, it could be catastrophic. Always: start with your opponent\u2019s threats first!',
        analogy: 'The thinking system is like crossing a road: first you look (threats), then you decide where to cross (candidates), then you estimate the distance and speed of cars (calculation), then you cross (decision). Someone who crosses without looking gets hit by a car. Someone who plays without thinking loses a piece.',
        practice: 'In your next 5 games, before every move you play, say to yourself (aloud or in your head): "What is my opponent threatening?" Then "What are my candidates?" Then "What happens after each one?" Then "Which is best?" This will be slow at first but will become automatic after 20\u201330 games.',
        quiz: [
          {
            question: 'What is the first step in the thinking system before any move?',
            options: [
              'Check your opponent\u2019s threats',
              'Choose the best attacking move',
              'Calculate 10 moves ahead',
              'Move the queen'
            ],
            correct: 0,
            explanation: 'The first step is always checking your opponent\u2019s threats. What good is a brilliant attacking move if your opponent is threatening checkmate that you overlooked? Safety first, then attack.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 4-2  Open Files
      // ----------------------------------------------------------------------
      {
        id: 'open-files',
        title: 'Open Files',
        icon: '\uD83C\uDFD7',
        content: `
<h3>The Rook\u2019s Highway</h3>
<p>An open file is a vertical column (like the e-file or d-file) with no pawns on it \u2014 neither White\u2019s nor Black\u2019s. A semi-open file has only one side\u2019s pawn. Rooks love open files because they can move freely along them and penetrate into the opponent\u2019s camp.</p>
<h3>Why Are Open Files Important?</h3>
<ul>
<li><strong>Penetrating the ranks:</strong> A rook on an open file can reach the 7th rank (or 2nd rank) \u2014 this is a treasure because the opponent\u2019s pawns and king are usually on that rank.</li>
<li><strong>Pressure:</strong> Even without penetrating, a rook on an open file pressures the opponent and forces them to keep defensive pieces in place.</li>
<li><strong>Doubling rooks:</strong> Two rooks on the same open file = double the power. The first protects the second as it penetrates.</li>
</ul>
<h3>How to Open a File</h3>
<ol>
<li><strong>Exchange pawns:</strong> If your pawn exchanges with the opponent\u2019s on the same file, the file opens up.</li>
<li><strong>Sacrifice a pawn:</strong> Sometimes you sacrifice a pawn specifically to open a file for your rook.</li>
<li><strong>Gambit:</strong> Some openings sacrifice a pawn specifically to open files.</li>
</ol>
<h3>The Rook on the 7th Rank</h3>
<p>When your rook reaches the 7th rank (2nd for Black), wonderful things happen:</p>
<ul>
<li>It eats the opponent\u2019s unmoved pawns on their home rank</li>
<li>It traps the opponent\u2019s king on the back rank</li>
<li>It cuts off communication between the opponent\u2019s pieces</li>
</ul>
<p>Two rooks on the 7th rank (called "pigs on the 7th") = disaster for any opponent. They usually lead to checkmate or massive material loss.</p>
<h3>Semi-Open Files</h3>
<p>A semi-open file (with one side\u2019s pawn only) is also useful. Your rook pressures the lone pawn on this file. If that pawn is weak (isolated or backward), you might win it. And if it\u2019s removed, the file becomes fully open.</p>
`,
        fen: 'r4rk1/ppp2ppp/2n1bn2/3p4/3P4/2NBPN2/PP3PPP/R4RK1 w - - 0 10',
        highlights: ['e1', 'e8'],
        arrows: [['f1','e1'],['a1','e1']],
        commonMistake: 'Beginners leave their rooks in the corners for the entire game with nothing to do. A rook on a1 or h1 without an open file is a "sleeping" piece contributing nothing. Move your rooks to open or semi-open files \u2014 this multiplies their power.',
        analogy: 'An open file is like a highway with no traffic. The rook cruises along it at full speed and reaches any destination. A closed file (with pawns) is like a jammed street \u2014 the rook is stuck and can\u2019t do anything. Open the roads for your rooks!',
        practice: 'In every game you play, right after castling, ask: where is the open or semi-open file? Place your rook on it. If there\u2019s no open file, think: how do I open one? (Usually by exchanging a pawn.) Try this in 5 games and compare the results.',
        quiz: [
          {
            question: 'What does "open file" mean?',
            options: [
              'A file with two rooks on it',
              'A file with no pawns on it \u2014 neither White\u2019s nor Black\u2019s',
              'A file with one pawn on it',
              'Any file passing through the center'
            ],
            correct: 1,
            explanation: 'An open file is completely free of pawns. This allows rooks to move freely along it and penetrate into the opponent\u2019s camp. A file with one pawn is called "semi-open."'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 4-3  Weak Pawns
      // ----------------------------------------------------------------------
      {
        id: 'weak-pawns',
        title: 'Weak Pawns',
        icon: '\uD83E\uDE79',
        content: `
<h3>Pawns Can\u2019t Retreat \u2014 Their Mistakes Are Permanent</h3>
<p>The pawn is the only piece that cannot move backward. So every pawn structure error stays with you for the rest of the game. Understanding the types of weak pawns helps you avoid creating them in your position and exploit them in your opponent\u2019s.</p>
<h3>1. The Isolated Pawn</h3>
<p>A pawn with no friendly pawn on either adjacent file. Example: a White pawn on d4 with no pawns on c or e. Why is it weak?</p>
<ul>
<li>It can\u2019t be protected by another pawn \u2014 it needs pieces to guard it.</li>
<li>The square in front of it (d5) becomes a "strong point" for the opponent \u2014 they can park a knight there.</li>
<li>In endgames especially, an isolated pawn is an easy target.</li>
</ul>
<h3>2. The Doubled Pawn</h3>
<p>Two pawns of the same color on the same file. Usually happens after capturing a piece with a pawn. Why is it weak?</p>
<ul>
<li>The rear pawn usually can\u2019t advance because the front one blocks it.</li>
<li>Both need piece protection.</li>
<li>In endgames, two doubled pawns effectively function as one.</li>
</ul>
<h3>3. The Backward Pawn</h3>
<p>A pawn that can\u2019t advance because the square in front of it is controlled by an opponent\u2019s pawn, and it can\u2019t be supported by a neighboring pawn. Example: a pawn on d6 with the opponent controlling d5 via a pawn on e4 or c4. Why is it weak?</p>
<ul>
<li>The square in front of it is a strong point for the opponent.</li>
<li>It can be attacked down the semi-open file behind it.</li>
<li>It\u2019s "stuck" \u2014 it can\u2019t advance and can\u2019t retreat.</li>
</ul>
<h3>How to Exploit Weak Pawns</h3>
<ol>
<li><strong>Attack them with your pieces:</strong> Rook on the file, knight in front, bishop targeting them.</li>
<li><strong>Occupy the square in front:</strong> Place a knight or bishop on the square in front of the weak pawn.</li>
<li><strong>Be patient:</strong> Weak pawns aren\u2019t going anywhere \u2014 take your time building pressure.</li>
</ol>
<h3>How to Avoid Creating Weak Pawns</h3>
<ul>
<li>Don\u2019t capture toward the center with a pawn unless there\u2019s a strong reason.</li>
<li>Think twice before making a trade that creates doubled pawns.</li>
<li>Maintain a connected pawn structure where each pawn protects another.</li>
</ul>
`,
        fen: 'r1bq1rk1/pp3ppp/2n1pn2/3P4/3p4/2NB1N2/PP3PPP/R1BQ1RK1 w - - 0 10',
        highlights: ['d4', 'd5'],
        arrows: [],
        commonMistake: 'Beginners don\u2019t think about pawn structure when trading. They capture with pawns in any direction without considering the consequences. Before any pawn capture, ask: will this create an isolated or doubled pawn? If yes, is the compensation worth it? Sometimes doubled pawns are acceptable (e.g., if they open a file for your rook) \u2014 but you must be aware of the cost.',
        analogy: 'Pawns are like the foundation of a building. If the foundation is strong and connected, the building stands firm. If there are gaps or cracks (isolated and doubled pawns), the building is weak and may collapse. In chess, pawns are the foundation of your position \u2014 keep them connected.',
        practice: 'After every game, look at your final pawn structure. Did you create isolated pawns? Doubled ones? When did that happen and why? Could it have been avoided? This post-game analysis will make you much more aware of pawn structure in future games.',
        quiz: [
          {
            question: 'What is an isolated pawn?',
            options: [
              'A pawn with no friendly pawn on either adjacent file',
              'A pawn in the corner',
              'A pawn on the last rank',
              'A pawn protected by the king'
            ],
            correct: 0,
            explanation: 'An isolated pawn has no friendly pawns on neighboring files. This means it cannot be protected by another pawn \u2014 requiring piece defense, which ties down your pieces and makes the pawn a permanent target.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 4-4  Outposts
      // ----------------------------------------------------------------------
      {
        id: 'outposts',
        title: 'Outposts',
        icon: '\uD83C\uDFD4',
        content: `
<h3>A Fortress the Opponent Can\u2019t Evict Your Knight From</h3>
<p>An outpost is a square in the opponent\u2019s territory that cannot be attacked by any opposing pawn. When you place a piece (especially a knight) on an outpost, it becomes like a fortified castle in the heart of enemy land \u2014 annoying, influential, and extremely hard to remove.</p>
<h3>What Makes a Square an Outpost?</h3>
<p>A square qualifies as an outpost if three conditions are met:</p>
<ol>
<li><strong>In the opponent\u2019s territory:</strong> Usually on rank 4, 5, or 6 (for White).</li>
<li><strong>Protected by your pawn:</strong> One of your pawns guards this square.</li>
<li><strong>Can\u2019t be chased by an opponent\u2019s pawn:</strong> The opponent\u2019s pawns on adjacent files are either gone or have already advanced past it.</li>
</ol>
<h3>Why Is the Knight Best for Outposts?</h3>
<p>The knight benefits most from outposts for several reasons:</p>
<ul>
<li><strong>Doesn\u2019t need open lines:</strong> The bishop and rook need open diagonals and files. The knight jumps and doesn\u2019t care what\u2019s around it.</li>
<li><strong>Controls many squares:</strong> A knight on d5 controls 8 squares \u2014 all deep in enemy territory.</li>
<li><strong>Hard to remove:</strong> No pawn can chase it (by definition), and a bishop on a different-colored square can\u2019t trade with it.</li>
</ul>
<h3>Famous Outpost Squares</h3>
<ul>
<li><strong>d5 and e5:</strong> Central outposts \u2014 the most powerful of all.</li>
<li><strong>c5 and f5:</strong> Excellent outposts on the flanks of the center.</li>
<li><strong>d6 and e6:</strong> Deep outposts in the opponent\u2019s camp \u2014 devastating if reachable.</li>
</ul>
<h3>How to Create an Outpost</h3>
<ol>
<li><strong>Remove the opponent\u2019s adjacent pawn:</strong> Exchange pawns so the opponent loses the pawn guarding that square.</li>
<li><strong>Secure your protecting pawn:</strong> Make sure the pawn protecting the outpost can\u2019t be easily exchanged.</li>
<li><strong>Plant your knight:</strong> Gradually maneuver the knight to the outpost.</li>
<li><strong>Exploit:</strong> From the outpost, threaten the opponent\u2019s pieces and restrict their movement.</li>
</ol>
<h3>How to Deal with an Opponent\u2019s Knight on an Outpost</h3>
<ul>
<li><strong>Trade it:</strong> If possible, exchange the knight with a bishop or knight \u2014 even if the trade is "equal" numerically, removing a knight from an outpost is worth it.</li>
<li><strong>Restrict it:</strong> Reduce the squares it can escape to.</li>
<li><strong>Ignore it and attack elsewhere:</strong> Sometimes the opponent\u2019s knight sits on an outpost but isn\u2019t actually doing anything important \u2014 focus your energy elsewhere.</li>
</ul>
`,
        fen: 'r1bq1rk1/pp2ppbp/2np1np1/2pN4/2P1P3/2N1BP2/PP4PP/R2QKB1R w KQ - 0 9',
        highlights: ['d5'],
        arrows: [['d5','c7'],['d5','e7'],['d5','f6'],['d5','b6']],
        commonMistake: 'Beginners place a bishop on an outpost instead of a knight. A bishop on d5 may look strong, but it can be chased by pieces along the same diagonal. A knight is much harder to evict because it\u2019s unaffected by pieces moving in straight lines. Also: don\u2019t forget to protect your knight on the outpost \u2014 otherwise the opponent just captures it!',
        analogy: 'An outpost is like a hilltop on a battlefield. A soldier (knight) on the hill sees everything and threatens in every direction. The enemy can\u2019t dislodge them because the hill is fortified. Meanwhile, a soldier in the valley (a normal square) is boxed in with limited visibility. Put your soldiers on the hills!',
        practice: 'In your next games, after the opening, ask: is there an outpost I can exploit? Look for squares on the 5th rank that no enemy pawn can attack. If you find one, plan to maneuver your knight there step by step. Notice how the pressure on your opponent changes.',
        quiz: [
          {
            question: 'Why is the knight the best piece for outposts?',
            options: [
              'Because it\u2019s the strongest piece',
              'Because it protects the king',
              'Because it moves quickly',
              'Because it doesn\u2019t need open lines and can\u2019t be chased by a pawn'
            ],
            correct: 3,
            explanation: 'The knight doesn\u2019t need open diagonals or files (unlike the bishop and rook). And since an outpost by definition can\u2019t be attacked by an opposing pawn, the knight stays safe and effective. It\u2019s the "perfect tenant" for an outpost.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 4-5  The Principle of Two Weaknesses
      // ----------------------------------------------------------------------
      {
        id: 'two-weaknesses',
        title: 'The Principle of Two Weaknesses',
        icon: '\uD83C\uDFAF',
        content: `
<h3>One Weakness Can Be Defended \u2014 Two Cannot</h3>
<p>This is one of the most important strategic principles in chess, used by world champions daily. The idea: if your opponent has one weakness, they can gather all their pieces to defend it. But if you create a second weakness on the opposite side, their pieces can\u2019t defend both \u2014 and one of the positions will fall.</p>
<h3>How Does It Work in Practice?</h3>
<ol>
<li><strong>Identify the first weakness:</strong> Perhaps an isolated pawn, an exposed king, or a weak square.</li>
<li><strong>Attack it:</strong> Apply pressure until the opponent gathers their pieces to defend.</li>
<li><strong>Create a second weakness:</strong> On the opposite side or in a distant area. This forces the opponent\u2019s pieces to split.</li>
<li><strong>Alternate between targets:</strong> Attack weakness #1 \u2014 the opponent defends. Switch immediately to #2 \u2014 the opponent reorganizes. Switch again. Eventually, one of the targets will fall.</li>
</ol>
<h3>Practical Examples</h3>
<p><strong>Example 1:</strong> Your opponent has a weak pawn on a7 and their king on g8 has no escape square. Attack a7 with your rook \u2014 they defend. Shift your queen to threaten back-rank mate \u2014 they defend. Return to a7 \u2014 they can\u2019t cover both.</p>
<p><strong>Example 2:</strong> In an endgame, your king is centralized and your opponent\u2019s is in the corner. You have a passed pawn on the kingside and pressure on the queenside pawns. The opponent\u2019s king can\u2019t be in two places at once. If it goes to stop the passed pawn, you capture the queenside pawns. And vice versa.</p>
<h3>How to Create a Second Weakness</h3>
<ul>
<li><strong>Flank pawn push:</strong> Advance pawns on the kingside or queenside to create weaknesses in the opponent\u2019s structure.</li>
<li><strong>Strategic exchange:</strong> Trade a piece that was defending a certain area, making it vulnerable.</li>
<li><strong>Promotion threat:</strong> Push a passed pawn toward promotion \u2014 this creates a "weakness" (the promotion danger) the opponent must deal with.</li>
</ul>
<h3>Patience Is Key</h3>
<p>The two-weakness principle requires patience. Don\u2019t expect to win in one move \u2014 but through a series of switches between targets. You might need 10 or 15 moves of "maneuvering" before the opponent\u2019s defense collapses. This is called "technique" \u2014 and it\u2019s what separates a good player from an excellent one.</p>
`,
        fen: 'r4rk1/1pp2ppp/p1n1bn2/4p3/P1B1P3/2N1BN2/1PP2PPP/R4RK1 w - - 0 12',
        highlights: ['a6', 'g7'],
        arrows: [['a4','a6'],['c4','f7']],
        commonMistake: 'Beginners focus on one weakness and attack it repeatedly without results \u2014 because the opponent defends it easily. The secret: once you\u2019ve pressured one weakness and the opponent has adapted, look for a second weakness. Don\u2019t repeat the same attack \u2014 diversify your targets.',
        analogy: 'Imagine a soccer team attacking only from the right wing. The defense gathers there. But if they suddenly switch to the left wing \u2014 the defense is caught out of position. That\u2019s exactly the two-weakness principle \u2014 attack right until the defense gathers, then strike left.',
        practice: 'Watch a game by Anatoly Karpov (former world champion famous for this principle) on YouTube. Notice how he pressures one side then switches to the other. In your games, if you find yourself "stuck" attacking one point without results, stop and ask: where is the second weakness?',
        quiz: [
          {
            question: 'Your opponent is successfully defending their weak pawn on a6. What\u2019s the next step?',
            options: [
              'Keep attacking a6 with more force',
              'Create a second weakness on the other side and alternate between both targets',
              'Give up \u2014 the defense can\u2019t be broken',
              'Trade all the pieces'
            ],
            correct: 1,
            explanation: 'If the opponent is successfully defending one weakness, create a second one. Their pieces can\u2019t defend two distant targets simultaneously. This is the two-weakness principle \u2014 the most powerful strategic concept in chess.'
          }
        ]
      }
    ]
  },
  // ========================================================================
  // PHASE 5: Endgames (PAID)
  // ========================================================================
  {
    id: 'phase-5',
    title: 'Endgames',
    subtitle: 'Where advantages become victories',
    free: false,
    color: '#f39c12',
    concepts: [
      // ----------------------------------------------------------------------
      // 5-1  King Activation
      // ----------------------------------------------------------------------
      {
        id: 'king-activation',
        title: 'King Activation',
        icon: '\uD83D\uDC51',
        content: `
<h3>The King Transforms from Target to Weapon</h3>
<p>In the opening and middlegame, the king must hide \u2014 because queens and rooks threaten checkmate. But in the endgame (when most pieces have been exchanged), the king transforms from a "target to protect" into a "powerful attacking piece." This transformation is the first and most important principle in endgames.</p>
<h3>Why Does the King Become Strong in the Endgame?</h3>
<ul>
<li><strong>Checkmate danger drops:</strong> Without queens and rooks, it\u2019s very hard to deliver checkmate. The king is safe.</li>
<li><strong>The king is a free piece:</strong> It moves one square in any direction \u2014 useful for protecting pawns and attacking the opponent\u2019s.</li>
<li><strong>Every piece counts:</strong> In endgames with few pieces, adding the king as an active piece gives you a major advantage.</li>
</ul>
<h3>How to Activate Your King</h3>
<ol>
<li><strong>March it toward the center:</strong> A centralized king reaches any side quickly. A king stuck in the corner is far from the action.</li>
<li><strong>March it toward the pawns:</strong> Wherever your pawns and your opponent\u2019s pawns are, the king should be there.</li>
<li><strong>Use it to support promotion:</strong> The king escorts your passed pawn as it advances toward promotion.</li>
</ol>
<h3>When to Start Activating the King</h3>
<p>The moment the queens are traded (or only minor pieces and pawns remain), immediately start marching the king toward the center. Don\u2019t wait \u2014 every move you delay gives your opponent a chance to activate their king first. The first king to reach the center usually wins.</p>
<h3>Practical Example</h3>
<p>In the position shown, White\u2019s king is on e1 (far from the action) and Black\u2019s is on e8 (also far). Whoever moves their king first toward the center (d3-d4 or d6-d5) gains a decisive advantage. Imagine: after 5 moves, White\u2019s king is on d4 while Black\u2019s is still on e8 \u2014 White supports their pawns and eats Black\u2019s pawns while Black is helpless.</p>
<h3>The King as Attacker</h3>
<p>The king doesn\u2019t just protect \u2014 it attacks too! It can:</p>
<ul>
<li>Capture the opponent\u2019s weak pawns</li>
<li>Help its own pawn promote by marching in front of it</li>
<li>Chase the opponent\u2019s pieces off important squares</li>
<li>Guard outposts</li>
</ul>
`,
        fen: '4k3/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/4K3 w - - 0 1',
        highlights: ['e1', 'd3', 'd4'],
        arrows: [['e1','d2'],['d2','d3'],['d3','d4']],
        commonMistake: 'Beginners keep their king in the corner throughout the endgame \u2014 "because they\u2019re afraid for it." In the endgame, a hiding king = a wasted piece. You must overcome your fear and march the king toward the center immediately after the queens are traded. Timidity in the endgame loses games.',
        analogy: 'At the start of a war, the commander sits in a safe headquarters far from the battle. But when the main fighting is over and only a few soldiers remain, the commander goes into the field and fights personally \u2014 because every fighter matters. That\u2019s exactly the king\u2019s role in the endgame.',
        practice: 'Play 5 games on lichess with a long time control (15+10). In every game that reaches the endgame, remember: first thing = march the king toward the center. Track how many games you did it and how many you forgot. You\u2019ll notice a clear difference in results.',
        quiz: [
          {
            question: 'When should you start activating the king?',
            options: [
              'On the first move of the game',
              'Only when your king is completely alone',
              'Immediately after the queens are traded or when entering the endgame',
              'In the opening'
            ],
            correct: 2,
            explanation: 'Once the queens are traded (or most heavy pieces disappear), the checkmate danger drops dramatically. That\u2019s the signal for king activation \u2014 march it immediately toward the center and toward the pawns.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 5-2  Passed Pawns & the Rule of the Square
      // ----------------------------------------------------------------------
      {
        id: 'passed-pawns',
        title: 'Passed Pawns & the Rule of the Square',
        icon: '\uD83C\uDFC3',
        content: `
<h3>The Passed Pawn \u2014 The Most Dangerous Pawn on the Board</h3>
<p>A passed pawn is a pawn with no opposing pawn ahead of it or on either adjacent file to stop its advance. This means it can march toward promotion without any pawn obstacles \u2014 only pieces can stop it.</p>
<h3>Why Is a Passed Pawn Dangerous?</h3>
<p>Because if it promotes, it becomes a queen! An extra queen means a certain win in most cases. So the opponent is forced to stop it \u2014 which means dedicating a piece (or more) to guard duty. Those pieces are "tied down" \u2014 they can\u2019t do anything else. In other words: a single passed pawn can neutralize an entire enemy piece!</p>
<h3>The Rule of the Square</h3>
<p>This is a golden rule in king-and-pawn endgames. It answers the question: <strong>can the opponent\u2019s king catch my passed pawn before it promotes?</strong></p>
<p><strong>How it works:</strong></p>
<ol>
<li>Draw a square with one corner at the passed pawn and another on the promotion rank (rank 8 for White, rank 1 for Black).</li>
<li>The number of squares from the pawn to the promotion rank = the side length of the square.</li>
<li>If the opponent\u2019s king is inside this square (or can enter it on their next move), it catches the pawn.</li>
<li>If the king is outside the square, the pawn promotes safely!</li>
</ol>
<h3>Practical Example</h3>
<p>White pawn on a5. It needs 3 moves to promote (a5-a6-a7-a8). Promotion square: a5 to a8 (3 squares) \u00d7 a5 to d5 (3 squares). Black\u2019s king is on f6 \u2014 is it inside the square (a5, a8, d8, d5)? f6 is outside! So the pawn promotes without the king catching it.</p>
<h3>Protected vs. Unprotected Passed Pawns</h3>
<ul>
<li><strong>Protected passed pawn:</strong> A passed pawn protected by another pawn. This is a treasure because even if the opponent\u2019s king stands in front of it, the protecting pawn advances and forces the king to retreat.</li>
<li><strong>Outside passed pawn:</strong> A passed pawn far from the opponent\u2019s pawns. Dangerous because the opponent\u2019s king needs many moves to reach it \u2014 and meanwhile you eat their pawns on the other side.</li>
</ul>
<h3>The Golden Rule</h3>
<p>"Passed pawns must be pushed" \u2014 this is a fundamental endgame principle. Don\u2019t leave your passed pawn sitting idle \u2014 push it toward promotion. The further it advances, the greater the danger for your opponent and the more pressure it creates.</p>
`,
        fen: '8/8/8/P4k2/8/8/8/4K3 w - - 0 1',
        highlights: ['a5', 'a8'],
        arrows: [['a5','a6'],['a6','a7'],['a7','a8']],
        commonMistake: 'Beginners forget the Rule of the Square and waste time trying to chase a passed pawn they can\u2019t catch. Or the opposite \u2014 they resign thinking the opponent\u2019s pawn will promote when their king can actually enter the square and stop it. Learn the Rule of the Square and you\u2019ll make the right decision in seconds.',
        analogy: 'A passed pawn is like a runner in a race with no competitors ahead \u2014 the path to the finish line (promotion) is clear. The Rule of the Square tells you: is the security guard (opponent\u2019s king) close enough to intercept the runner before they cross the line? If the guard is too far away \u2014 the runner wins.',
        practice: 'On lichess.org, look for pawn endgame puzzles. Or set up a position with two kings and 2\u20133 pawns on the analysis board and experiment: can your king stop the opponent\u2019s pawn? Apply the Rule of the Square in 10 different positions until it becomes automatic.',
        quiz: [
          {
            question: 'White pawn on c6, Black king on h7. Can the king catch the pawn?',
            options: [
              'Yes \u2014 the king is fast',
              'Cannot be determined',
              'Depends on White\u2019s move',
              'No \u2014 the king is outside the promotion square'
            ],
            correct: 3,
            explanation: 'The pawn on c6 needs 2 moves to promote (c7-c8). The promotion square goes from c6 to c8 (2 squares) = a square with side 2 (c6-c8-e8-e6). The king on h7 is far outside this square and can\u2019t enter in one move \u2014 the pawn promotes!'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 5-3  Opposition
      // ----------------------------------------------------------------------
      {
        id: 'opposition',
        title: 'Opposition',
        icon: '\uD83D\uDC65',
        content: `
<h3>The Showdown Between Kings</h3>
<p>Opposition is a crucial concept in king-and-pawn endgames. It occurs when the two kings stand face to face on the same file, rank, or diagonal with one square (or an odd number of squares) between them. The player who is <strong>not</strong> on the move has the opposition \u2014 and this is an advantage!</p>
<h3>Why Is Opposition Important?</h3>
<p>In a king confrontation, the player with opposition forces the opponent\u2019s king to retreat or step aside. This grants control of key squares \u2014 and in pawn endgames, controlling a single square can mean the difference between winning and drawing.</p>
<h3>Examples</h3>
<p><strong>Example 1 \u2014 White wins:</strong> White king e5, White pawn e4, Black king e7. It\u2019s White\u2019s turn. If White plays Kd6! Now Black must move: Kd8 allows Ke6 then the pawn marches e5-e6-e7-e8=Q. Or Kf8 allows Kd7 and the same.</p>
<p><strong>Example 2 \u2014 Draw:</strong> Same position but Black to move. Ke7-d7! (takes the opposition). Now wherever White\u2019s king goes, Black mirrors it. If Kd5 then Kd7. If Kf5 then Kf7. White can\u2019t advance \u2014 and the pawn alone can\u2019t promote.</p>
<h3>Types of Opposition</h3>
<ul>
<li><strong>Direct opposition:</strong> The kings are on the same file or rank with one square between them. The simplest and most important.</li>
<li><strong>Diagonal opposition:</strong> The kings are on the same diagonal with one square between them.</li>
<li><strong>Distant opposition:</strong> The kings are on the same file or rank with an odd number (3 or 5) of squares between them.</li>
</ul>
<h3>Practical Rule</h3>
<p>In a king-and-pawn vs. king endgame:</p>
<ul>
<li>If your king is in front of your pawn and you have the opposition = you win.</li>
<li>If your king is in front of your pawn but you don\u2019t have the opposition = draw (usually).</li>
<li>If your pawn is ahead of your king = winning is difficult (depends on the position).</li>
</ul>
<h3>The Exception: Rook Pawns (a and h files)</h3>
<p>Edge pawns (on the a-file or h-file) can never win against a king that reaches the corner! Because the king stands in front of the pawn and the pawn is on the edge \u2014 there\u2019s no room for the attacking king to outflank the defending king. The result is always stalemate (draw).</p>
`,
        fen: '8/4k3/8/4K3/4P3/8/8/8 w - - 0 1',
        highlights: ['e5', 'e7'],
        arrows: [['e5','d6'],['e5','f6']],
        commonMistake: 'A common error: pushing the pawn instead of advancing the king. In king-and-pawn endgames, the king must lead and march in front of the pawn. If you push the pawn first without preparing with the king, you\u2019ll usually draw even with an extra pawn. The rule: king first, pawn second.',
        analogy: 'Opposition is like a "who blinks first" game. The two kings face each other and neither can advance toward the other. The one whose turn it is (forced to move = "blinks") has to step aside \u2014 and the other advances and gains ground.',
        practice: 'Set up on a lichess board: White king e1, White pawn e2, Black king e8. Try to win as White. Then try to draw as Black. You\u2019ll discover that opposition is the key. Repeat with different positions until you deeply understand the principle.',
        quiz: [
          {
            question: 'White king d5, pawn d4, Black king d7. Who has the opposition if it\u2019s Black\u2019s move?',
            options: [
              'White has the opposition',
              'Black has the opposition',
              'No one has it',
              'Opposition doesn\u2019t matter here'
            ],
            correct: 0,
            explanation: 'White has the opposition because it\u2019s not White\u2019s turn. Black is forced to move \u2014 wherever they go, White advances. For example: Kc7 allows Ke6, then d5-d6-d7. This is a winning position for White.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 5-4  The Lucena Position
      // ----------------------------------------------------------------------
      {
        id: 'lucena-position',
        title: 'The Lucena Position',
        icon: '\uD83C\uDFC6',
        content: `
<h3>The Most Important Position in Rook Endgames</h3>
<p>The Lucena Position is the single most important position in all of chess endgames. If you learn only one endgame position, this should be it. It occurs in rook-and-pawn vs. rook endings and teaches you how to win when your pawn is on the 7th rank.</p>
<h3>The Standard Setup</h3>
<p>Your king protects your pawn on the 7th rank (e.g., king on e8, pawn on e7). Your rook is somewhere on the board (e.g., a1). The opponent\u2019s king is trying to approach, and their rook gives checks from behind to prevent promotion.</p>
<h3>The Problem</h3>
<p>Your king stands in front of its pawn and blocks the promotion path. If your king moves to the side, the opponent\u2019s rook gives lateral checks and forces the king back. It seems like you\u2019re stuck!</p>
<h3>The Solution \u2014 Building the Bridge</h3>
<p>"Building the bridge" is the brilliant technique that solves this problem:</p>
<ol>
<li><strong>Move your rook to the 4th rank:</strong> For example, from a1 to a4.</li>
<li><strong>Step your king sideways:</strong> From e8 to d7, for instance. (The opponent gives checks with their rook.)</li>
<li><strong>Advance your king:</strong> When the checks pause momentarily, step forward.</li>
<li><strong>Use your rook as a shield:</strong> Place your rook on the 4th rank (e.g., e4) to create a "bridge" that blocks the lateral checks.</li>
<li><strong>Promote the pawn:</strong> Now your king is shielded by the rook, advance and the pawn promotes.</li>
</ol>
<h3>Why the 4th Rank?</h3>
<p>Because the 4th rank provides enough distance between your rook and the opponent\u2019s rook. If you put your rook on the 5th rank (too close), there won\u2019t be enough space to shield the king. The 4th rank is the optimal distance \u2014 far enough to work as an effective barrier.</p>
<h3>Practical Value</h3>
<p>Rook-and-pawn endings are the most common endgames in real games (about 30% of all endgames!). Knowing the Lucena Position alone will save you in dozens of games. Many players rated 1500\u20131800 don\u2019t know it \u2014 and they lose endgames they should have won.</p>
`,
        fen: '4K3/4P2r/8/8/8/8/8/R4k2 w - - 0 1',
        highlights: ['e8', 'e7', 'a1'],
        arrows: [['a1','a4'],['e8','d7']],
        commonMistake: 'Beginners try to win by shuffling the king left and right without a plan. The opponent\u2019s rook gives endless checks and the king can\u2019t advance. The only solution is "building the bridge" \u2014 move the rook to the 4th rank first, then use it as a shield. Without this technique, a winning position turns into a draw.',
        analogy: 'Imagine you\u2019re crossing a river while the enemy shoots at you from the other bank. Without a bridge you\u2019re stuck. But if you build a bridge (the rook barrier), you cross safely. The rook on the 4th rank = the bridge. Your king crosses over it, protected from the "gunfire" (checks) of the opponent\u2019s rook.',
        practice: 'Set up on lichess: White king e8, pawn e7, rook a1; Black king f6, rook h7. Try to win as White using the bridge technique. If you succeed, change the positions and repeat. Your goal: execute the bridge in under a minute.',
        quiz: [
          {
            question: 'In the Lucena Position, where do you place your rook to build the bridge?',
            options: [
              'Right next to the king',
              'Behind the pawn',
              'On the 4th rank to act as a shield against the opponent\u2019s lateral checks',
              'In the corner'
            ],
            correct: 2,
            explanation: 'The rook on the 4th rank creates a "bridge" \u2014 a barrier that blocks the opponent\u2019s rook from giving lateral checks. This allows your king to emerge in front of the pawn and step away safely so the pawn can promote.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 5-5  The Philidor Position
      // ----------------------------------------------------------------------
      {
        id: 'philidor-position',
        title: 'The Philidor Position',
        icon: '\uD83D\uDEE1',
        content: `
<h3>How to Draw When You\u2019re a Pawn Down</h3>
<p>The Philidor Position is the flip side of Lucena. While Lucena teaches you how to win, Philidor teaches you how to draw. If your opponent has a rook and a pawn and you only have a rook \u2014 is the game over? No! With the Philidor technique you can draw.</p>
<h3>The Core Idea</h3>
<p>The plan is to keep your rook on the <strong>6th rank</strong> (if you\u2019re Black defending) as long as the opponent\u2019s pawn hasn\u2019t reached the 6th rank. This prevents the opponent\u2019s king from advancing and maintains the draw.</p>
<h3>The Steps</h3>
<ol>
<li><strong>Place your king in front of the pawn:</strong> Your king stands on the pawn\u2019s file and blocks its advance.</li>
<li><strong>Place your rook on the 6th rank:</strong> The rook on the 6th rank prevents the opponent\u2019s king from advancing in front of its pawn.</li>
<li><strong>Wait:</strong> As long as the opponent\u2019s pawn hasn\u2019t reached the 6th rank, hold your position.</li>
<li><strong>When the pawn reaches the 6th rank:</strong> Move your rook to the 1st rank (or 8th) and start giving checks from behind.</li>
</ol>
<h3>Why the 6th Rank?</h3>
<p>The 6th rank is the ideal position because it:</p>
<ul>
<li>Prevents the opponent\u2019s king from advancing (it would walk into the rook\u2019s sights).</li>
<li>Maintains enough maneuvering room.</li>
<li>Allows transition to back-rank checks when needed.</li>
</ul>
<h3>Why Do Back-Rank Checks Work?</h3>
<p>When the opponent\u2019s pawn advances to the 6th rank and tries to promote, your rook retreats to the back rank (1st or 8th) and gives repeated checks. The opponent\u2019s king can\u2019t hide from the checks because its pawn blocks the squares in front of it, and it can\u2019t wander too far or it loses the pawn.</p>
<h3>Exception: Rook Pawns</h3>
<p>As in king-and-pawn endgames, edge pawns (a-file or h-file) are the easiest to defend against. The defending king just needs to reach the corner \u2014 and usually the draw is guaranteed even without a rook!</p>
<h3>Practical Value</h3>
<p>This position will save you dozens of times. How often have you found yourself a pawn down in an endgame and thought you\u2019d lose? With the Philidor technique, many of these positions are draws. Remember: rook on the 6th rank, then checks from behind.</p>
`,
        fen: '8/4k3/4r3/8/4P3/8/8/4RK2 b - - 0 1',
        highlights: ['e6', 'e7'],
        arrows: [['e6','a6'],['e6','h6']],
        commonMistake: 'Beginners who are a pawn down place their rook passively \u2014 behind the opponent\u2019s pawn or next to their king. This lets the opponent advance and win. The rule: rook on the 6th rank (not behind the pawn), then back-rank checks. Don\u2019t be passive \u2014 an active rook draws even when a pawn down!',
        analogy: 'Philidor is like a smart goalkeeper. They don\u2019t stand in the goal (passive) \u2014 they come off the line (6th rank) to cut out crosses before they arrive. And when the opponent shoots from close range (pawn advances), they retreat and make the save (back-rank checks).',
        practice: 'Set up on lichess: White king d5, pawn e4, rook a1; Black king e8, rook a6. Try to draw as Black. The rule: keep the rook on the 6th rank. When the pawn reaches e6, move the rook to a1 and start checking. Repeat until you master it.',
        quiz: [
          {
            question: 'In the Philidor Position, where do you place your rook for defense?',
            options: [
              'Directly behind the opponent\u2019s pawn',
              'On the 6th rank to prevent the opponent\u2019s king from advancing',
              'Next to your king',
              'In the corner'
            ],
            correct: 1,
            explanation: 'The rook on the 6th rank prevents the opponent\u2019s king from advancing in front of its pawn. This maintains the draw. When the pawn advances to the 6th rank, the rook retreats to the back rank for checks. A simple technique that saves many games.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 5-6  Queen Endgames
      // ----------------------------------------------------------------------
      {
        id: 'queen-endgames',
        title: 'Queen Endgames',
        icon: '\u265B',
        content: `
<h3>The Hardest and Most Exciting Endgames</h3>
<p>Queen endgames (queen and pawns vs. queen and pawns) are among the most difficult endgames in chess. The queen is so powerful she can give unlimited checks and create threats from anywhere on the board. This makes calculations complex and mistakes frequent \u2014 even among champions.</p>
<h3>Fundamental Principles</h3>
<p><strong>1. King Safety First</strong></p>
<p>In queen endgames, your king is always in danger. The queen can give check from virtually anywhere. So: secure your king before anything else. The best place for the king is usually next to a pawn (hiding behind it from checks).</p>
<p><strong>2. Perpetual Check</strong></p>
<p>Perpetual check is the #1 weapon for the weaker side. If you\u2019re a pawn down, don\u2019t resign \u2014 look for perpetual check possibilities. The queen can chase the king from every angle. If the king can\u2019t hide, the result is a draw by threefold repetition.</p>
<p><strong>3. Queen Activity</strong></p>
<p>An active queen (one that threatens many things) is far stronger than a passive queen (one that only defends). Try to make your queen the one that threatens and attacks \u2014 not the one that reacts and defends.</p>
<p><strong>4. Outside Passed Pawns</strong></p>
<p>In queen endgames, a distant passed pawn is a lethal weapon. The opponent needs time to shift their queen from one side to the other \u2014 and meanwhile you do what you want on the opposite side. The two-weakness principle works beautifully here.</p>
<h3>Winning Techniques</h3>
<ul>
<li><strong>Advance the pawn with queen support:</strong> The queen protects the pawn as it advances. If the opponent is forced to trade queens, you\u2019re in a pawn endgame with a passed pawn = win.</li>
<li><strong>Gradual restriction:</strong> Gradually reduce the opponent\u2019s king\u2019s space until it\u2019s cornered.</li>
<li><strong>Well-timed exchange:</strong> Sometimes trading queens transforms the position into a winning pawn endgame.</li>
</ul>
<h3>Drawing Techniques</h3>
<ul>
<li><strong>Perpetual check:</strong> Weapon #1. Always look for it.</li>
<li><strong>Stalemate:</strong> In desperate positions, look for stalemate possibilities (a draw with no legal move).</li>
<li><strong>Fortress:</strong> Hide your king in a corner with a pawn and let the queen give perpetual checks.</li>
</ul>
`,
        fen: '8/1p4kp/p5p1/4Q3/8/6PP/1q3PK1/8 w - - 0 1',
        highlights: ['e5', 'b2'],
        arrows: [],
        commonMistake: 'Beginners resign in queen endgames when they\u2019re a pawn down \u2014 while perpetual check to save a draw is usually available! In queen endgames, never resign until you\u2019re absolutely sure no perpetual check exists. Many positions that "look lost" are draws thanks to perpetual checks.',
        analogy: 'A queen endgame is like a duel between two warriors wielding long swords in an open arena. Each can strike from any angle. No one is completely safe. The skill isn\u2019t in the force of the blow \u2014 it\u2019s in maneuvering and positioning. The clever warrior knows when to attack and when to defend.',
        practice: 'On lichess.org/training, filter puzzles by "queenEndgame." Solve 10 puzzles. Notice how often the solution is "perpetual check" \u2014 you\u2019ll be surprised! Also, in your games when you reach a queen endgame and you\u2019re losing, don\u2019t resign \u2014 spend 30 seconds looking for perpetual check before making any decision.',
        quiz: [
          {
            question: 'What is the strongest defensive weapon in queen endgames?',
            options: [
              'Perpetual check (draw by repetition)',
              'Trading queens',
              'Attacking the opponent\u2019s pawns',
              'Centralizing the king'
            ],
            correct: 0,
            explanation: 'Perpetual check is the strongest drawing weapon in queen endgames. The queen can chase the king from every angle \u2014 and if the king can\u2019t hide, the result is a draw by repetition. This saves many "lost" positions.'
          }
        ]
      }
    ]
  },
  // ========================================================================
  // PHASE 6: Your Roadmap (PAID)
  // ========================================================================
  {
    id: 'phase-6',
    title: 'Your Roadmap',
    subtitle: 'From beginner to confident player',
    free: false,
    color: '#1abc9c',
    concepts: [
      // ----------------------------------------------------------------------
      // 6-1  Daily Routine
      // ----------------------------------------------------------------------
      {
        id: 'daily-routine',
        title: 'Daily Routine',
        icon: '\u23F0',
        content: `
<h3>20 Minutes a Day Creates a Champion</h3>
<p>You don\u2019t need hours every day to improve at chess. 20 focused minutes daily is far better than 3 scattered hours once a week. The secret is consistency \u2014 the brain builds "chess muscles" through daily repetition, just like physical exercise.</p>
<h3>The Ideal Routine (20 Minutes)</h3>
<p><strong>5 minutes \u2014 Solve tactical puzzles</strong></p>
<p>Start your day with 5 puzzles on lichess.org/training. This warms up your brain and sharpens your tactical vision. The rule: don\u2019t rush the solution. Read the position, identify threats, think, then click. Even if you get it wrong, read the solution and understand why.</p>
<ul>
<li>Monday: Fork puzzles</li>
<li>Tuesday: Pin puzzles</li>
<li>Wednesday: Checkmate puzzles</li>
<li>Thursday: Mixed puzzles</li>
<li>Friday: Endgame puzzles</li>
<li>Saturday: Challenging puzzles (above your level)</li>
<li>Sunday: Review puzzles you got wrong during the week</li>
</ul>
<p><strong>10 minutes \u2014 Play one game</strong></p>
<p>Play one game with a 10-minute time control (Rapid). One focused game is better than 10 speed games with no thought. While playing:</p>
<ul>
<li>Apply the thinking system (TCCD) on every move</li>
<li>Complete the four opening tasks</li>
<li>Look for tactics</li>
<li>Never resign \u2014 play every game to the end</li>
</ul>
<p><strong>5 minutes \u2014 Analyze your game</strong></p>
<p>After the game, use the analysis tool on lichess. These are the most important 5 minutes of your routine! Look for:</p>
<ul>
<li>Blunders \u2014 why did they happen?</li>
<li>Missed opportunities \u2014 did you miss a fork or pin?</li>
<li>The opening \u2014 did you complete the four tasks?</li>
<li>Turning point \u2014 where did the game shift in your favor or against you?</li>
</ul>
<h3>Golden Rules</h3>
<ul>
<li><strong>Consistency > duration:</strong> 20 minutes daily \u00d7 30 days = 600 minutes. Far better than 3 hours every Saturday.</li>
<li><strong>Quality > quantity:</strong> One focused game is better than 20 bullet games with no thought.</li>
<li><strong>Analysis > playing:</strong> Analyzing your game is more important than playing new ones.</li>
<li><strong>Diversify:</strong> Don\u2019t always play the same opening \u2014 try new things.</li>
</ul>
`,
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        highlights: [],
        arrows: [],
        commonMistake: 'The biggest mistake: playing tons of games without analyzing them. It\u2019s like jogging without a direction \u2014 lots of movement but no progress. A player who plays 3 games and analyzes each one improves far faster than a player who plays 30 games without analysis. Analysis is the real teacher.',
        analogy: 'The daily routine is like a gym workout. Puzzles = warm-up exercises. The game = the main workout. Analysis = reviewing your performance with the coach. Without a warm-up you\u2019ll get injured (tactical blunders). Without a review you won\u2019t know what to improve.',
        practice: 'Start today! Open lichess.org, solve 5 puzzles, play one game (10 minutes), analyze it. Write in a notebook: today\u2019s date, game result, biggest mistake, and lesson learned. After a week, go back and read your notes \u2014 you\u2019ll notice clear improvement.',
        quiz: [
          {
            question: 'What is the most important part of the daily routine?',
            options: [
              'Playing the most games possible',
              'Memorizing openings',
              'Analyzing your game after playing',
              'Watching champion games'
            ],
            correct: 2,
            explanation: 'Analyzing your game is the most important part because it reveals your personal weaknesses. Every player has different weak spots \u2014 and analysis is the only way to discover and fix them.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 6-2  8-Week Plan
      // ----------------------------------------------------------------------
      {
        id: 'eight-week-plan',
        title: '8-Week Plan',
        icon: '\uD83D\uDCC5',
        content: `
<h3>From Zero to 1000+ in 8 Weeks</h3>
<p>This is a realistic, proven plan to take you from complete beginner to a player who understands the game and enjoys it. It\u2019s not a fantasy plan \u2014 if you commit 20\u201330 minutes daily, you\u2019ll get there.</p>
<h3>Weeks 1\u20132: Fundamentals</h3>
<ul>
<li><strong>Goal:</strong> Master piece movement, piece values, and special rules.</li>
<li><strong>Study:</strong> Re-read Phase 1 of this course.</li>
<li><strong>Practice:</strong> 10 puzzles daily (beginner level).</li>
<li><strong>Play:</strong> 2\u20133 games daily against the computer (easy level).</li>
<li><strong>Weekly target:</strong> Know every piece\u2019s movement without thinking.</li>
</ul>
<h3>Weeks 3\u20134: The Opening</h3>
<ul>
<li><strong>Goal:</strong> Master the four tasks and one opening with White and one with Black.</li>
<li><strong>Study:</strong> Phase 2 \u2014 focus on the Italian (White) and the Sicilian (Black).</li>
<li><strong>Practice:</strong> 5 puzzles + one game + analysis.</li>
<li><strong>Play:</strong> Start playing against humans (lichess.org \u2014 10 minutes).</li>
<li><strong>Weekly target:</strong> Complete the four tasks in 8 out of 10 games.</li>
</ul>
<h3>Weeks 5\u20136: Tactics</h3>
<ul>
<li><strong>Goal:</strong> Spot forks, pins, and discovered attacks within 3 seconds.</li>
<li><strong>Study:</strong> Phase 3 \u2014 one concept every two days.</li>
<li><strong>Practice:</strong> 10 puzzles daily (focus on tactics).</li>
<li><strong>Play:</strong> One game daily + detailed analysis.</li>
<li><strong>Weekly target:</strong> Find at least one tactic in every game.</li>
</ul>
<h3>Weeks 7\u20138: Full Application</h3>
<ul>
<li><strong>Goal:</strong> Integrate everything you\u2019ve learned into real games.</li>
<li><strong>Study:</strong> Quick review of Phases 1\u20133 + begin Phase 4.</li>
<li><strong>Practice:</strong> 5 puzzles + 2 games daily + analysis.</li>
<li><strong>Play:</strong> Participate in a weekly tournament on lichess (free!).</li>
<li><strong>Final target:</strong> 1000+ rating on lichess.</li>
</ul>
<h3>Tips for Sticking with It</h3>
<ol>
<li><strong>Choose a fixed time:</strong> For example, after dinner or before bed.</li>
<li><strong>Start small:</strong> If 20 minutes feels like too much, start with 10.</li>
<li><strong>Track your progress:</strong> Write down your rating each week \u2014 seeing progress motivates.</li>
<li><strong>Don\u2019t compare yourself:</strong> Everyone improves at a different pace.</li>
<li><strong>Have fun:</strong> If you\u2019re not enjoying it, change your approach, not the game.</li>
</ol>
`,
        fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1',
        highlights: ['e4'],
        arrows: [],
        commonMistake: 'The biggest mistake: trying to learn everything in one week. Chess is a deep game \u2014 no one masters it quickly. The phased plan ensures you build a strong foundation before adding the upper floors. If you jump to tactics before mastering piece movement, you\u2019re like someone trying to run before they\u2019ve learned to walk.',
        analogy: 'The 8-week plan is like learning to swim. Weeks 1\u20132: learn to float (fundamentals). Weeks 3\u20134: learn arm and leg strokes (openings). Weeks 5\u20136: learn proper breathing (tactics). Finally: swim with full technique (application). Each stage builds on the previous one.',
        practice: 'Print this plan or save it on your phone. Set a daily reminder for your chosen time. Every week log: your current rating, number of puzzles solved, number of games analyzed. After 8 weeks, compare \u2014 you\u2019ll be amazed at the progress.',
        quiz: [
          {
            question: 'What is the correct order for learning chess?',
            options: [
              'Tactics \u2192 openings \u2192 fundamentals \u2192 endgames',
              'Memorize games \u2192 play tournaments \u2192 learn the rules',
              'Endgames \u2192 middlegame \u2192 openings \u2192 fundamentals',
              'Fundamentals \u2192 openings \u2192 tactics \u2192 full application'
            ],
            correct: 3,
            explanation: 'The natural order: first understand the pieces and the board (fundamentals), then how to start a game (openings), then how to win material (tactics), then integrate everything (application). Each stage depends on the one before it.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 6-3  Best Resources
      // ----------------------------------------------------------------------
      {
        id: 'best-resources',
        title: 'Best Resources',
        icon: '\uD83D\uDCDA',
        content: `
<h3>Everything You Need Is Free</h3>
<p>One of the best things about chess is that the finest learning resources are completely free. You don\u2019t need to pay anything to become a good player. Here\u2019s a list of the best resources, ranked by priority.</p>
<h3>Websites</h3>
<p><strong>1. Lichess.org \u2014 The Best Overall (100% Free)</strong></p>
<ul>
<li>Play games at every time control (bullet, blitz, rapid, classical)</li>
<li>Unlimited tactical puzzles categorized by theme</li>
<li>Powerful analysis engine (Stockfish) completely free</li>
<li>Community-created studies and opening explanations</li>
<li>Free tournaments daily</li>
<li>No ads \u2014 open-source project</li>
</ul>
<p><strong>2. Chess.com \u2014 The Most Popular (Partially Free)</strong></p>
<ul>
<li>Excellent interactive lessons (some paid)</li>
<li>Limited free daily puzzles (unlimited with subscription)</li>
<li>Very large community</li>
<li>Great mobile app</li>
</ul>
<h3>YouTube Channels</h3>
<p><strong>1. GothamChess (Levy Rozman)</strong></p>
<p>The best channel for beginners and intermediates. Levy explains in a simple, entertaining, high-energy style. His "How to Win at Chess" series is excellent for beginners. Content includes game analysis, opening explanations, puzzles, and chess news.</p>
<p><strong>2. Daniel Naroditsky (Danya)</strong></p>
<p>A legend in chess education. His "Speedrun" series \u2014 where he starts at a 600 rating and climbs to 2800+ \u2014 is some of the best educational content in chess history. He explains every move he plays and why \u2014 you\u2019ll learn the correct thinking process by watching him.</p>
<p><strong>3. Eric Rosen</strong></p>
<p>A calm, relaxed style. Famous for creative traps and beautiful endgames. Great for relaxing while learning chess at the same time.</p>
<h3>Books (For Those Who Want to Go Deeper)</h3>
<ul>
<li><strong>"Bobby Fischer Teaches Chess"</strong> \u2014 The simplest book for learning checkmate patterns. Requires no prior experience.</li>
<li><strong>"The Woodpecker Method"</strong> \u2014 For improving tactics through repeated puzzle solving.</li>
<li><strong>"Silman\u2019s Complete Endgame Course"</strong> \u2014 The best endgame book, organized by skill level.</li>
</ul>
<h3>Mobile Apps</h3>
<ul>
<li><strong>Lichess (free):</strong> Same features as the website \u2014 puzzles, play, and analysis.</li>
<li><strong>Chess Tactics (free):</strong> Tactical puzzles only \u2014 great for practice on the go.</li>
<li><strong>Lucas Chess (computer \u2014 free):</strong> Train against the computer at many levels.</li>
</ul>
`,
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        highlights: [],
        arrows: [],
        commonMistake: 'Beginners scatter themselves across 10 different resources \u2014 a website here, a book there, a third YouTube channel. The result: no progress in anything. The better approach: choose lichess.org + one YouTube channel (GothamChess or Naroditsky) and commit to them for 3 months. After that you can branch out.',
        analogy: 'Learning resources are like food \u2014 variety is important but overeating causes indigestion! Don\u2019t try to "consume" everything at once. Choose a balanced "meal" (a website + a channel) and digest it well. When you\u2019re hungry for more, add a new resource.',
        practice: 'Today: 1) Create a lichess.org account if you don\u2019t have one. 2) Subscribe to GothamChess or Naroditsky on YouTube. 3) Watch the first video from their beginner series. 4) Solve 5 puzzles on lichess. 5) Play one game. That\u2019s all you need to get started!',
        quiz: [
          {
            question: 'What is the best free chess website?',
            options: [
              'Chess.com only',
              'Lichess.org \u2014 100% free with no limitations',
              'YouTube only',
              'There is no good free site'
            ],
            correct: 1,
            explanation: 'Lichess.org is completely free and open-source. It offers everything: play, unlimited puzzles, analysis with the strongest engine (Stockfish), tournaments, and studies. No ads and no subscriptions. The best starting point for any player.'
          }
        ]
      },
      // ----------------------------------------------------------------------
      // 6-4  Analyzing Your Games
      // ----------------------------------------------------------------------
      {
        id: 'game-analysis',
        title: 'Analyzing Your Games',
        icon: '\uD83D\uDD2C',
        content: `
<h3>Your Real Teacher Is Your Mistakes</h3>
<p>Every world chess champion says the same thing: "I learned more from my mistakes than from my victories." Analyzing your games is the most powerful learning tool you have \u2014 and it\u2019s completely free. Yet most players don\u2019t do it! If you start analyzing your games, you\u2019ll surpass 90% of players at your level.</p>
<h3>Analysis Steps (5\u201310 Minutes Per Game)</h3>
<p><strong>Step 1: Self-Analysis First (2 minutes)</strong></p>
<p>Before you open the engine (Stockfish), go through the game yourself:</p>
<ul>
<li>What did you do well?</li>
<li>Where did you feel you made a mistake?</li>
<li>Which move was the hardest?</li>
<li>At what point did the game turn?</li>
</ul>
<p><strong>Step 2: Engine Analysis (3 minutes)</strong></p>
<p>On lichess, go to your game and click "Computer Analysis." The engine will show:</p>
<ul>
<li><span style="color:red">Blunders</span> \u2014 the most important. Focus on these.</li>
<li><span style="color:orange">Mistakes</span> \u2014 also important.</li>
<li><span style="color:yellow">Inaccuracies</span> \u2014 less important for beginners.</li>
</ul>
<p><strong>Step 3: Understand the Mistakes (3 minutes)</strong></p>
<p>For each blunder, ask:</p>
<ol>
<li><strong>What did I play?</strong> \u2014 The move you chose.</li>
<li><strong>What was better?</strong> \u2014 What the engine suggests.</li>
<li><strong>Why did I blunder?</strong> \u2014 Did I miss the opponent\u2019s threat? Did I rush? Did I not calculate deeply enough?</li>
<li><strong>What\u2019s the pattern?</strong> \u2014 Was it a tactical error (missed a fork)? Strategic (weak pawn structure)? Or a timing error (rushed)?</li>
</ol>
<p><strong>Step 4: Record the Lesson (1 minute)</strong></p>
<p>Write in a notebook or phone notes one sentence: "Today I learned\u2026" For example: "Today I learned to check my opponent\u2019s threats before playing my move." This single sentence cements the lesson in your memory.</p>
<h3>Common Error Patterns</h3>
<p>After analyzing 20 games, you\u2019ll notice recurring patterns in your mistakes:</p>
<ul>
<li><strong>If most errors are tactical:</strong> Focus on puzzles \u2014 you need better tactical vision.</li>
<li><strong>If they\u2019re in the opening:</strong> Review the four tasks \u2014 maybe you\u2019re bringing the queen out early or not castling.</li>
<li><strong>If they\u2019re due to rushing:</strong> Play longer time controls (15+10 instead of 3+0).</li>
<li><strong>If they\u2019re in the endgame:</strong> Study the Lucena and Philidor positions.</li>
</ul>
<h3>The Bottom Line</h3>
<p>Every world champion started from zero. The difference between them and those who didn\u2019t improve is: <strong>analysis and learning from mistakes</strong>. Start today \u2014 5 minutes of analysis after every game. After one month, you\u2019ll be a completely different player.</p>
`,
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        highlights: [],
        arrows: [],
        commonMistake: 'Two mistakes: 1) Relying entirely on the engine without thinking for yourself \u2014 if you don\u2019t try to understand your mistakes on your own first, you won\u2019t truly learn. 2) Focusing on what the engine\u2019s best move is instead of understanding why your move was bad. The engine suggests a better move \u2014 but what matters is understanding why yours was wrong.',
        analogy: 'Game analysis is like watching video replay of a soccer match after it\u2019s over. The coach doesn\u2019t just look at the score \u2014 they review every attack and every defensive error. They ask: why did we lose the ball here? Who should have covered that zone? Same in chess \u2014 go back, watch the "film," and learn.',
        practice: 'Analyze your last 3 games on lichess. For each game: identify the biggest blunder, record its cause, and note the lesson. After analyzing all three, look for the common pattern. If all mistakes were tactical \u2014 start solving more puzzles. If they were in the opening \u2014 review Phase 2.',
        quiz: [
          {
            question: 'What is the first step in analyzing your game?',
            options: [
              'Open the engine immediately',
              'Delete the game and forget about it',
              'Self-analysis \u2014 go through the game yourself first, before the engine',
              'Share it with friends'
            ],
            correct: 2,
            explanation: 'Self-analysis first is crucial because it builds your own evaluation skills. If you jump straight to the engine, you won\u2019t learn to think independently. Try to identify your mistakes yourself first \u2014 then use the engine to verify and discover what you missed.'
          }
        ]
      }
    ]
  }
];
