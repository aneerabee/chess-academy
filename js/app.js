/**
 * Chess Academy - Main Application Engine
 * Renders lessons, handles navigation, quizzes, XP, streaks, progress, and paywall.
 * Bilingual (AR/EN). RTL/LTR layout. No external dependencies.
 */

(function () {
  'use strict';

  // ─── Constants ───────────────────────────────────────────────────────────────

  const FREE_PHASES = 2;
  const CODE_HASH = '25233f75855c29b33f4d824e949fa85e690aa644951a461a80d9ac1a65832390';
  const GUMROAD_URL = 'https://gumroad.com/l/chess-academy-ar';
  const STORAGE_KEY = 'chess_academy_progress';

  const XP_OPEN_CONCEPT = 10;
  const XP_COMPLETE_CONCEPT = 25;
  const XP_CORRECT_QUIZ = 15;
  const XP_COMPLETE_PHASE = 100;

  const PHASE_ICONS = ['♟', '♞', '♝', '♜', '♛', '♚'];

  const STREAK_MILESTONES = [7, 30, 60, 100, 365];

  // ─── Translations ──────────────────────────────────────────────────────────

  const I18N = {
    ar: {
      title: 'أكاديمية الشطرنج',
      subtitle: 'تعلم الشطرنج خطوة بخطوة من البداية حتى الاحتراف',
      phases: 'المراحل التعليمية',
      phaseQuiz: 'اختبار المرحلة',
      nextQuestion: 'السؤال التالي ←',
      showResults: 'عرض النتائج ←',
      nextPhase: 'المرحلة التالية ←',
      settings: 'الإعدادات',
      xpLabel: 'نقاط الخبرة',
      overallProgress: 'التقدم الكلي',
      resetProgress: 'إعادة تعيين التقدم',
      resetConfirm: 'هل تريد حذف جميع بيانات التقدم؟ لا يمكن التراجع عن هذا.',
      resetDone: 'تم إعادة تعيين التقدم',
      wellDone: 'أحسنت! أكملت',
      unlockAdvanced: 'افتح المراحل المتقدمة',
      getFullAccess: 'احصل على الوصول الكامل لجميع المراحل والدروس والاختبارات',
      paywall: 'اكتشف أسرار الشطرنج المتقدمة',
      enterCode: 'لديك رمز وصول؟',
      activate: 'تفعيل',
      wrongCode: 'رمز غير صحيح',
      buyNow: 'اشترِ الآن',
      firstStep: 'الخطوة الأولى',
      firstStepDesc: 'أكملت المرحلة الأولى',
      master: 'الأستاذ',
      masterDesc: 'أكملت جميع المراحل',
      beginner: 'مبتدئ',
      amateur: 'هاوٍ',
      intermediate: 'متقدم',
      expert: 'خبير',
      noQuiz: 'لا يوجد اختبار لهذه المرحلة بعد',
      back: 'رجوع',
      correct: 'صحيح!',
      wrong: 'خطأ',
      home: 'الرئيسية',
      consecutiveDays: 'أيام متتالية',
      streakDays: 'يوم متتالي!',
      streakKeepGoing: 'أحسنت! استمر في التعلم كل يوم',
      streakContinue: 'متابعة',
      saveFailed: 'فشل في حفظ التقدم',
      phase: 'المرحلة',
      lesson: 'درس',
      lessonLabel: 'الدرس',
      quiz: 'اختبار',
      questions: 'أسئلة — اختبر فهمك',
      backToPhases: 'العودة للمراحل',
      backToPhase: 'العودة للمرحلة',
      commonMistake: 'خطأ شائع',
      analogy: 'تشبيه للتوضيح',
      practice: 'تمرين تطبيقي',
      importantTips: 'نصائح مهمة',
      completedLesson: 'أكملت هذا الدرس',
      completed: 'مكتمل',
      prevLesson: 'الدرس السابق',
      nextLesson: 'الدرس التالي',
      prevStep: 'السابق',
      nextStep: 'التالي',
      correctAnswer: 'إجابة صحيحة!',
      wrongAnswer: 'إجابة خاطئة — الصحيح:',
      perfect: 'ممتاز! أداء مثالي!',
      passed: 'أحسنت! اجتزت الاختبار بنجاح',
      tryAgain: 'حاول مرة أخرى — المراجعة تصنع التميز',
      reviewAnswers: 'مراجعة الإجابات',
      yourAnswer: 'إجابتك:',
      correctIs: 'الصحيح:',
      retryQuiz: 'أعد المحاولة',
      premiumContent: 'هذا المحتوى متاح للأعضاء المميزين فقط...',
      discoverSecrets: 'اكتشف أسرار الشطرنج المتقدمة مع دروس حصرية...',
      premiumMembership: 'العضوية المميزة',
      feature1: '6 مراحل تعليمية كاملة',
      feature2: 'أكثر من 50 درس تفاعلي',
      feature3: 'اختبارات لكل مرحلة',
      feature4: 'لوحات شطرنج تفاعلية',
      feature5: 'تحديثات مجانية مدى الحياة',
      or: 'أو',
      enterAccessCode: 'لديك رمز الوصول؟',
      enterCodePlaceholder: 'أدخل رمز الوصول',
      verify: 'تحقق',
      backToFreePhases: 'العودة للمراحل المجانية',
      enterTheCode: 'أدخل رمز الوصول',
      accessActivated: 'تم تفعيل الوصول الكامل! مرحبا بك',
      wrongAccessCode: 'رمز الوصول غير صحيح',
      newAchievements: 'إنجازات جديدة',
      lessonsCompleted: 'درس مكتمل',
      xpPoints: 'نقطة خبرة',
      level: 'المستوى',
      backToHome: 'العودة للرئيسية',
      statistics: 'الإحصائيات',
      consecutiveDaysLabel: 'أيام متتالية',
      completedLessons: 'الدروس المكتملة',
      access: 'الوصول',
      fullAccess: 'كامل',
      freeAccess: 'مجاني',
      achievements: 'الإنجازات',
      data: 'البيانات',
      exportData: 'تصدير البيانات',
      importDataLabel: 'استيراد البيانات',
      importDataTitle: 'استيراد البيانات',
      pasteJSON: 'الصق بيانات JSON هنا',
      import: 'استيراد',
      cancel: 'إلغاء',
      activateFullAccess: 'تفعيل الوصول الكامل',
      fullAccessActivated: 'تم تفعيل الوصول الكامل!',
      exportSuccess: 'تم تصدير البيانات بنجاح',
      importSuccess: 'تم استيراد البيانات بنجاح',
      importFailed: 'فشل استيراد البيانات — تأكد من صحة الصيغة',
      confirm: 'تأكيد',
      deleteAll: 'نعم، احذف الكل',
      dataNotFound: 'لم يتم العثور على البيانات',
      dataNotFoundDesc: 'تأكد من تحميل ملف الدروس قبل تشغيل التطبيق.',
      retry: 'إعادة المحاولة',
      pageNotFound: 'الصفحة غير موجودة',
      pageNotFoundDesc: 'الرابط الذي تبحث عنه غير موجود.',
      appMissing: 'عنصر #app غير موجود',
    },
    en: {
      title: 'Chess Academy',
      subtitle: 'Learn chess step by step from beginner to confident player',
      phases: 'Learning Phases',
      phaseQuiz: 'Phase Quiz',
      nextQuestion: 'Next Question →',
      showResults: 'Show Results →',
      nextPhase: 'Next Phase →',
      settings: 'Settings',
      xpLabel: 'Experience Points',
      overallProgress: 'Overall Progress',
      resetProgress: 'Reset Progress',
      resetConfirm: 'Delete all progress data? This cannot be undone.',
      resetDone: 'Progress has been reset',
      wellDone: 'Well done! You completed',
      unlockAdvanced: 'Unlock Advanced Phases',
      getFullAccess: 'Get full access to all phases, lessons and quizzes',
      paywall: 'Discover advanced chess secrets',
      enterCode: 'Have an access code?',
      activate: 'Activate',
      wrongCode: 'Invalid code',
      buyNow: 'Buy Now',
      firstStep: 'First Step',
      firstStepDesc: 'Completed the first phase',
      master: 'Master',
      masterDesc: 'Completed all phases',
      beginner: 'Beginner',
      amateur: 'Amateur',
      intermediate: 'Intermediate',
      expert: 'Expert',
      noQuiz: 'No quiz available for this phase yet',
      back: 'Back',
      correct: 'Correct!',
      wrong: 'Wrong',
      home: 'Home',
      consecutiveDays: 'Day streak',
      streakDays: 'day streak!',
      streakKeepGoing: 'Great job! Keep learning every day',
      streakContinue: 'Continue',
      saveFailed: 'Failed to save progress',
      phase: 'Phase',
      lesson: 'lesson',
      lessonLabel: 'Lesson',
      quiz: 'Quiz',
      questions: 'questions — test your understanding',
      backToPhases: 'Back to Phases',
      backToPhase: 'Back to Phase',
      commonMistake: 'Common Mistake',
      analogy: 'Analogy',
      practice: 'Practice Exercise',
      importantTips: 'Important Tips',
      completedLesson: 'I completed this lesson',
      completed: 'Completed',
      prevLesson: 'Previous Lesson',
      nextLesson: 'Next Lesson',
      prevStep: 'Previous',
      nextStep: 'Next',
      correctAnswer: 'Correct answer!',
      wrongAnswer: 'Wrong answer — correct is:',
      perfect: 'Excellent! Perfect score!',
      passed: 'Well done! You passed the quiz',
      tryAgain: 'Try again — review makes perfect',
      reviewAnswers: 'Review Answers',
      yourAnswer: 'Your answer:',
      correctIs: 'Correct:',
      retryQuiz: 'Retry',
      premiumContent: 'This content is available for premium members only...',
      discoverSecrets: 'Discover advanced chess secrets with exclusive lessons...',
      premiumMembership: 'Premium Membership',
      feature1: '6 complete learning phases',
      feature2: 'Over 50 interactive lessons',
      feature3: 'Quizzes for every phase',
      feature4: 'Interactive chess boards',
      feature5: 'Free lifetime updates',
      or: 'or',
      enterAccessCode: 'Have an access code?',
      enterCodePlaceholder: 'Enter access code',
      verify: 'Verify',
      backToFreePhases: 'Back to free phases',
      enterTheCode: 'Enter access code',
      accessActivated: 'Full access activated! Welcome',
      wrongAccessCode: 'Invalid access code',
      newAchievements: 'New Achievements',
      lessonsCompleted: 'lessons completed',
      xpPoints: 'experience points',
      level: 'Level',
      backToHome: 'Back to Home',
      statistics: 'Statistics',
      consecutiveDaysLabel: 'Day streak',
      completedLessons: 'Completed Lessons',
      access: 'Access',
      fullAccess: 'Full',
      freeAccess: 'Free',
      achievements: 'Achievements',
      data: 'Data',
      exportData: 'Export Data',
      importDataLabel: 'Import Data',
      importDataTitle: 'Import Data',
      pasteJSON: 'Paste JSON data here',
      import: 'Import',
      cancel: 'Cancel',
      activateFullAccess: 'Activate Full Access',
      fullAccessActivated: 'Full access activated!',
      exportSuccess: 'Data exported successfully',
      importSuccess: 'Data imported successfully',
      importFailed: 'Import failed — check the format',
      confirm: 'Confirm',
      deleteAll: 'Yes, delete all',
      dataNotFound: 'Data not found',
      dataNotFoundDesc: 'Make sure the lessons file is loaded before running the app.',
      retry: 'Retry',
      pageNotFound: 'Page not found',
      pageNotFoundDesc: 'The link you are looking for does not exist.',
      appMissing: '#app element not found',
    }
  };

  function detectLang() {
    if (typeof LESSONS_EN !== 'undefined') return 'en';
    return 'ar';
  }
  const LANG = detectLang();
  const T = I18N[LANG];

  const LEVELS = [
    { name: T.beginner, min: 0 },
    { name: T.amateur, min: 100 },
    { name: T.intermediate, min: 300 },
    { name: T.expert, min: 600 },
  ];

  // ─── LTR Override for English ───────────────────────────────────────────────

  if (LANG === 'en') {
    document.body.style.direction = 'ltr';
    document.body.style.textAlign = 'left';
  }

  // ─── Storage Layer ───────────────────────────────────────────────────────────

  const Storage = {
    _defaults() {
      return {
        completedConcepts: [],
        quizResults: {},
        xp: 0,
        streak: 0,
        lastVisit: '',
        access: false,
        achievements: [],
        phaseCompletions: [],
      };
    },

    getProgress() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return this._defaults();
        const parsed = JSON.parse(raw);
        const defaults = this._defaults();
        return { ...defaults, ...parsed };
      } catch {
        return this._defaults();
      }
    },

    saveProgress(data) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch {
        console.error(T.saveFailed);
      }
    },

    hasAccess() {
      return this.getProgress().access === true;
    },

    grantAccess() {
      const progress = this.getProgress();
      progress.access = true;
      this.saveProgress(progress);
    },

    exportData() {
      return JSON.stringify(this.getProgress(), null, 2);
    },

    importData(json) {
      try {
        const data = JSON.parse(json);
        const defaults = this._defaults();
        const merged = { ...defaults, ...data };
        this.saveProgress(merged);
        return true;
      } catch {
        return false;
      }
    },

    resetProgress() {
      this.saveProgress(this._defaults());
    },
  };

  // ─── XP & Level Helpers ──────────────────────────────────────────────────────

  function getLevel(xp) {
    let current = LEVELS[0];
    for (const level of LEVELS) {
      if (xp >= level.min) current = level;
    }
    return current;
  }

  function getNextLevel(xp) {
    for (const level of LEVELS) {
      if (xp < level.min) return level;
    }
    return null;
  }

  function getLevelProgress(xp) {
    const current = getLevel(xp);
    const next = getNextLevel(xp);
    if (!next) return 100;
    const range = next.min - current.min;
    const progress = xp - current.min;
    return Math.round((progress / range) * 100);
  }

  function addXP(amount) {
    const progress = Storage.getProgress();
    progress.xp = (progress.xp || 0) + amount;
    Storage.saveProgress(progress);
    showXPToast(amount);
    updateHeader();
  }

  // ─── Streak System ──────────────────────────────────────────────────────────

  function updateStreak() {
    const progress = Storage.getProgress();
    const today = new Date().toISOString().split('T')[0];

    if (progress.lastVisit === today) return;

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    if (progress.lastVisit === yesterday) {
      progress.streak = (progress.streak || 0) + 1;
    } else if (progress.lastVisit && progress.lastVisit !== today) {
      progress.streak = 1;
    } else {
      progress.streak = 1;
    }

    progress.lastVisit = today;
    Storage.saveProgress(progress);

    const milestone = STREAK_MILESTONES.find(m => m === progress.streak);
    if (milestone) {
      showStreakCelebration(milestone);
    }
  }

  function showStreakCelebration(days) {
    const overlay = document.createElement('div');
    overlay.className = 'streak-celebration';
    overlay.innerHTML = `
      <div class="streak-celebration-content">
        <div class="streak-fire-big">🔥</div>
        <h2>${days} ${T.streakDays}</h2>
        <p>${T.streakKeepGoing}</p>
        <button onclick="this.parentElement.parentElement.remove()">${T.streakContinue}</button>
      </div>
    `;
    document.body.appendChild(overlay);
    setTimeout(() => overlay.remove(), 5000);
  }

  // ─── Hash Verification ──────────────────────────────────────────────────────

  async function hashCode(code) {
    const encoder = new TextEncoder();
    const data = encoder.encode(code.trim().toLowerCase());
    const buffer = await crypto.subtle.digest('SHA-256', data);
    const array = Array.from(new Uint8Array(buffer));
    return array.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async function verifyAccessCode(code) {
    const hashed = await hashCode(code);
    return hashed === CODE_HASH;
  }

  // ─── Lessons Data ───────────────────────────────────────────────────────────

  function getLessons() {
    // Try English first (if loaded), then Arabic
    if (typeof LESSONS_EN !== 'undefined' && Array.isArray(LESSONS_EN)) {
      return LESSONS_EN;
    }
    if (typeof LESSONS_AR !== 'undefined' && Array.isArray(LESSONS_AR)) {
      return LESSONS_AR;
    }
    return null;
  }

  function isEnglish() {
    return typeof LESSONS_EN !== 'undefined' && Array.isArray(LESSONS_EN);
  }

  // ─── Progress Calculations ──────────────────────────────────────────────────

  function getTotalConcepts() {
    const lessons = getLessons();
    if (!lessons) return 0;
    let total = 0;
    for (const phase of lessons) {
      total += (phase.concepts || []).length;
    }
    return total;
  }

  function getCompletedCount() {
    const progress = Storage.getProgress();
    return progress.completedConcepts.length;
  }

  function getOverallProgress() {
    const total = getTotalConcepts();
    if (total === 0) return 0;
    return Math.round((getCompletedCount() / total) * 100);
  }

  function isConceptCompleted(phaseIndex, conceptIndex) {
    const progress = Storage.getProgress();
    const key = `${phaseIndex}-${conceptIndex}`;
    return progress.completedConcepts.includes(key);
  }

  function markConceptCompleted(phaseIndex, conceptIndex) {
    const progress = Storage.getProgress();
    const key = `${phaseIndex}-${conceptIndex}`;
    if (!progress.completedConcepts.includes(key)) {
      progress.completedConcepts.push(key);
      Storage.saveProgress(progress);
      addXP(XP_COMPLETE_CONCEPT);
    }
  }

  function getPhaseProgress(phaseIndex) {
    const lessons = getLessons();
    if (!lessons || !lessons[phaseIndex]) return 0;
    const concepts = lessons[phaseIndex].concepts || [];
    if (concepts.length === 0) return 0;
    let completed = 0;
    for (let i = 0; i < concepts.length; i++) {
      if (isConceptCompleted(phaseIndex, i)) completed++;
    }
    return Math.round((completed / concepts.length) * 100);
  }

  function isPhaseCompleted(phaseIndex) {
    return getPhaseProgress(phaseIndex) === 100;
  }

  function isPhaseAccessible(phaseIndex) {
    if (phaseIndex < FREE_PHASES) return true;
    return Storage.hasAccess();
  }

  // ─── Toast Notifications ─────────────────────────────────────────────────────

  function showXPToast(amount) {
    const toast = document.createElement('div');
    toast.className = 'xp-toast';
    toast.textContent = `+${amount} XP`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 1500);
  }

  function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type || 'info'}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  // ─── Confetti Animation ──────────────────────────────────────────────────────

  function launchConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
      '#2196f3', '#03a9f4', '#00bcd4', '#4caf50', '#ff9800', '#ff5722'];
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.setProperty('--x', `${Math.random() * 100}vw`);
      piece.style.setProperty('--delay', `${Math.random() * 0.5}s`);
      piece.style.setProperty('--duration', `${1.5 + Math.random() * 2}s`);
      piece.style.setProperty('--rotation', `${Math.random() * 720}deg`);
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(piece);
    }
    document.body.appendChild(container);
    setTimeout(() => container.remove(), 4000);
  }

  // ─── Header ──────────────────────────────────────────────────────────────────

  function renderHeader() {
    const progress = Storage.getProgress();
    const level = getLevel(progress.xp || 0);
    const levelProg = getLevelProgress(progress.xp || 0);
    const overall = getOverallProgress();

    return `
      <header class="app-header">
        <div class="header-right">
          <button class="header-btn home-btn" onclick="App.navigate('/')" title="${T.home}">
            <span class="icon">♚</span>
            <span class="header-title">${T.title}</span>
          </button>
        </div>
        <div class="header-center">
          <div class="progress-bar-container" title="${T.overallProgress}: ${overall}%">
            <div class="progress-bar" style="width: ${overall}%"></div>
            <span class="progress-text">${overall}%</span>
          </div>
        </div>
        <div class="header-left">
          <div class="header-stat xp-display" title="${level.name} — ${progress.xp || 0} XP">
            <span class="stat-icon">⭐</span>
            <span class="stat-value">${progress.xp || 0}</span>
            <span class="stat-label">${level.name}</span>
          </div>
          <div class="header-stat streak-display" title="${T.consecutiveDays}">
            <span class="stat-icon">🔥</span>
            <span class="stat-value">${progress.streak || 0}</span>
          </div>
          <button class="header-btn settings-btn" onclick="App.navigate('/settings')" title="${T.settings}">
            <span class="icon">⚙</span>
          </button>
        </div>
      </header>
    `;
  }

  function updateHeader() {
    const headerEl = document.querySelector('.app-header');
    if (!headerEl) return;
    const tmp = document.createElement('div');
    tmp.innerHTML = renderHeader();
    const newHeader = tmp.querySelector('.app-header');
    if (newHeader) headerEl.replaceWith(newHeader);
  }

  // ─── Phase List ──────────────────────────────────────────────────────────────

  function renderPhaseList() {
    const lessons = getLessons();
    if (!lessons) {
      return renderNoData();
    }

    let phasesHTML = '';
    for (let i = 0; i < lessons.length; i++) {
      const phase = lessons[i];
      const prog = getPhaseProgress(i);
      const accessible = isPhaseAccessible(i);
      const completed = isPhaseCompleted(i);
      const locked = !accessible;
      const icon = PHASE_ICONS[i] || '♟';
      const conceptCount = (phase.concepts || []).length;
      const completedCount = (phase.concepts || []).filter((_, ci) => isConceptCompleted(i, ci)).length;

      phasesHTML += `
        <div class="phase-card ${locked ? 'locked' : ''} ${completed ? 'completed' : ''}"
             onclick="${locked ? 'App.navigate(\'/paywall\')' : `App.navigate('/phase/${i}')`}"
             role="button" tabindex="0"
             onkeydown="if(event.key==='Enter')this.click()">
          <div class="phase-icon">${locked ? '🔒' : icon}</div>
          <div class="phase-info">
            <h3 class="phase-title">${phase.title || `${T.phase} ${i + 1}`}</h3>
            <p class="phase-desc">${phase.description || ''}</p>
            <div class="phase-meta">
              <span class="concept-count">${completedCount}/${conceptCount} ${T.lesson}</span>
              ${phase.quiz ? `<span class="quiz-badge">${T.quiz}</span>` : ''}
            </div>
            <div class="phase-progress-bar">
              <div class="phase-progress-fill" style="width: ${prog}%"></div>
            </div>
          </div>
          ${completed ? '<div class="phase-check">✓</div>' : ''}
        </div>
      `;
    }

    return `
      <div class="phase-list">
        <div class="section-header">
          <h2>${T.phases}</h2>
          <p>${T.subtitle}</p>
        </div>
        <div class="phases-grid">
          ${phasesHTML}
        </div>
      </div>
    `;
  }

  // ─── Concept List ────────────────────────────────────────────────────────────

  function renderConceptList(phaseIndex) {
    const lessons = getLessons();
    if (!lessons || !lessons[phaseIndex]) {
      return renderNotFound();
    }

    if (!isPhaseAccessible(phaseIndex)) {
      return renderPaywall();
    }

    const phase = lessons[phaseIndex];
    const concepts = phase.concepts || [];

    let conceptsHTML = '';
    for (let i = 0; i < concepts.length; i++) {
      const concept = concepts[i];
      const completed = isConceptCompleted(phaseIndex, i);

      conceptsHTML += `
        <div class="concept-card ${completed ? 'completed' : ''}"
             onclick="App.navigate('/phase/${phaseIndex}/concept/${i}')"
             role="button" tabindex="0"
             onkeydown="if(event.key==='Enter')this.click()">
          <div class="concept-number">${completed ? '✓' : i + 1}</div>
          <div class="concept-info">
            <h4 class="concept-title">${concept.title || `${T.lessonLabel} ${i + 1}`}</h4>
            ${concept.subtitle ? `<p class="concept-subtitle">${concept.subtitle}</p>` : ''}
          </div>
          <div class="concept-arrow">${LANG === 'ar' ? '←' : '→'}</div>
        </div>
      `;
    }

    const hasQuiz = phase.quiz && phase.quiz.length > 0;
    const phaseProgress = getPhaseProgress(phaseIndex);

    return `
      <div class="concept-list">
        <div class="section-header">
          <button class="back-btn" onclick="App.navigate('/')">
            <span>${LANG === 'ar' ? '→' : '←'}</span> ${T.backToPhases}
          </button>
          <h2>${PHASE_ICONS[phaseIndex] || '♟'} ${phase.title || `${T.phase} ${phaseIndex + 1}`}</h2>
          <p>${phase.description || ''}</p>
          <div class="phase-progress-bar large">
            <div class="phase-progress-fill" style="width: ${phaseProgress}%"></div>
            <span class="progress-text">${phaseProgress}%</span>
          </div>
        </div>
        <div class="concepts-container">
          ${conceptsHTML}
        </div>
        ${hasQuiz ? `
          <div class="quiz-card" onclick="App.navigate('/phase/${phaseIndex}/quiz')"
               role="button" tabindex="0"
               onkeydown="if(event.key==='Enter')this.click()">
            <div class="quiz-icon">📝</div>
            <div class="quiz-info">
              <h4>${T.phaseQuiz}</h4>
              <p>${phase.quiz.length} ${T.questions}</p>
            </div>
            <div class="concept-arrow">${LANG === 'ar' ? '←' : '→'}</div>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ─── Concept Content ─────────────────────────────────────────────────────────

  function renderConcept(phaseIndex, conceptIndex) {
    const lessons = getLessons();
    if (!lessons || !lessons[phaseIndex]) return renderNotFound();

    if (!isPhaseAccessible(phaseIndex)) return renderPaywall();

    const phase = lessons[phaseIndex];
    const concepts = phase.concepts || [];
    const concept = concepts[conceptIndex];
    if (!concept) return renderNotFound();

    // Track opening
    const progress = Storage.getProgress();
    const key = `${phaseIndex}-${conceptIndex}`;
    if (!progress.completedConcepts.includes(key)) {
      addXP(XP_OPEN_CONCEPT);
    }

    const hasNext = conceptIndex < concepts.length - 1;
    const hasPrev = conceptIndex > 0;

    let boardHTML = '';
    if (concept.position) {
      const boardId = `board-${phaseIndex}-${conceptIndex}`;
      boardHTML = `
        <div class="chess-board-wrapper">
          <div id="${boardId}" class="chess-board-container"></div>
          ${concept.positionCaption ? `<p class="board-caption">${concept.positionCaption}</p>` : ''}
        </div>
      `;
      setTimeout(() => initConceptBoard(boardId, concept), 100);
    }

    let sequenceHTML = '';
    if (concept.sequence && concept.sequence.length > 0) {
      const seqId = `seq-${phaseIndex}-${conceptIndex}`;
      sequenceHTML = `
        <div class="chess-sequence-wrapper">
          <div id="${seqId}" class="chess-board-container"></div>
          <div class="sequence-controls" id="${seqId}-controls">
            <button onclick="App.sequencePrev('${seqId}')" class="seq-btn">${LANG === 'ar' ? '→' : '←'} ${T.prevStep}</button>
            <span class="seq-counter" id="${seqId}-counter">1/${concept.sequence.length}</span>
            <button onclick="App.sequenceNext('${seqId}')" class="seq-btn">${T.nextStep} ${LANG === 'ar' ? '←' : '→'}</button>
          </div>
        </div>
      `;
      setTimeout(() => initSequenceBoard(seqId, concept), 100);
    }

    let mistakeHTML = '';
    if (concept.commonMistake) {
      mistakeHTML = `
        <div class="info-box mistake-box">
          <div class="info-box-header">
            <span class="info-box-icon">⚠️</span>
            <span class="info-box-title">${T.commonMistake}</span>
          </div>
          <div class="info-box-content">${concept.commonMistake}</div>
        </div>
      `;
    }

    let analogyHTML = '';
    if (concept.analogy) {
      analogyHTML = `
        <div class="info-box analogy-box">
          <div class="info-box-header">
            <span class="info-box-icon">💡</span>
            <span class="info-box-title">${T.analogy}</span>
          </div>
          <div class="info-box-content">${concept.analogy}</div>
        </div>
      `;
    }

    let practiceHTML = '';
    if (concept.practice) {
      practiceHTML = `
        <div class="info-box practice-box">
          <div class="info-box-header">
            <span class="info-box-icon">🎯</span>
            <span class="info-box-title">${T.practice}</span>
          </div>
          <div class="info-box-content">${concept.practice}</div>
        </div>
      `;
    }

    let tipsHTML = '';
    if (concept.tips && concept.tips.length > 0) {
      const tipItems = concept.tips.map(t => `<li>${t}</li>`).join('');
      tipsHTML = `
        <div class="info-box tips-box">
          <div class="info-box-header">
            <span class="info-box-icon">📌</span>
            <span class="info-box-title">${T.importantTips}</span>
          </div>
          <ul class="tips-list">${tipItems}</ul>
        </div>
      `;
    }

    const completed = isConceptCompleted(phaseIndex, conceptIndex);

    return `
      <div class="concept-view">
        <div class="concept-nav-top">
          <button class="back-btn" onclick="App.navigate('/phase/${phaseIndex}')">
            <span>${LANG === 'ar' ? '→' : '←'}</span> ${phase.title || `${T.phase} ${phaseIndex + 1}`}
          </button>
          <span class="concept-counter">${conceptIndex + 1} / ${concepts.length}</span>
        </div>

        <article class="concept-content">
          <h2 class="concept-main-title">${concept.title || ''}</h2>
          ${concept.subtitle ? `<p class="concept-main-subtitle">${concept.subtitle}</p>` : ''}

          <div class="concept-body">
            ${concept.content || ''}
          </div>

          ${boardHTML}
          ${sequenceHTML}
          ${mistakeHTML}
          ${analogyHTML}
          ${practiceHTML}
          ${tipsHTML}
        </article>

        <div class="concept-actions">
          ${!completed ? `
            <button class="btn btn-primary btn-complete"
                    onclick="App.completeConcept(${phaseIndex}, ${conceptIndex})">
              ✓ ${T.completedLesson}
            </button>
          ` : `
            <div class="completed-badge">✓ ${T.completed}</div>
          `}
        </div>

        <div class="concept-nav-bottom">
          ${hasPrev ? `
            <button class="btn btn-secondary"
                    onclick="App.navigate('/phase/${phaseIndex}/concept/${conceptIndex - 1}')">
              ${LANG === 'ar' ? '→' : '←'} ${T.prevLesson}
            </button>
          ` : '<div></div>'}
          ${hasNext ? `
            <button class="btn btn-primary"
                    onclick="App.navigate('/phase/${phaseIndex}/concept/${conceptIndex + 1}')">
              ${T.nextLesson} ${LANG === 'ar' ? '←' : '→'}
            </button>
          ` : `
            <button class="btn btn-primary"
                    onclick="App.navigate('/phase/${phaseIndex}')">
              ${T.backToPhase} ${LANG === 'ar' ? '←' : '→'}
            </button>
          `}
        </div>
      </div>
    `;
  }

  // ─── Chess Board Integration ─────────────────────────────────────────────────

  const activeSequences = {};

  function initConceptBoard(boardId, concept) {
    const el = document.getElementById(boardId);
    if (!el || typeof ChessBoard === 'undefined') return;

    const board = new ChessBoard(el, {
      position: concept.position,
      highlights: concept.highlights || [],
      arrows: concept.arrows || [],
      interactive: false,
    });
    board.render();
  }

  function initSequenceBoard(seqId, concept) {
    const el = document.getElementById(seqId);
    if (!el || typeof ChessSequence === 'undefined') return;

    const seq = new ChessSequence(el, {
      steps: concept.sequence,
    });
    seq.render();
    activeSequences[seqId] = seq;
    updateSequenceCounter(seqId);
  }

  function sequenceNext(seqId) {
    const seq = activeSequences[seqId];
    if (seq) {
      seq.next();
      updateSequenceCounter(seqId);
    }
  }

  function sequencePrev(seqId) {
    const seq = activeSequences[seqId];
    if (seq) {
      seq.prev();
      updateSequenceCounter(seqId);
    }
  }

  function updateSequenceCounter(seqId) {
    const seq = activeSequences[seqId];
    const counter = document.getElementById(`${seqId}-counter`);
    if (seq && counter) {
      counter.textContent = `${seq.currentStep + 1}/${seq.totalSteps}`;
    }
  }

  // ─── Quiz System ─────────────────────────────────────────────────────────────

  let quizState = {
    phaseIndex: 0,
    questions: [],
    currentQuestion: 0,
    score: 0,
    answers: [],
    answered: false,
  };

  function renderQuiz(phaseIndex) {
    const lessons = getLessons();
    if (!lessons || !lessons[phaseIndex]) return renderNotFound();

    if (!isPhaseAccessible(phaseIndex)) return renderPaywall();

    const phase = lessons[phaseIndex];
    if (!phase.quiz || phase.quiz.length === 0) {
      return `
        <div class="quiz-empty">
          <button class="back-btn" onclick="App.navigate('/phase/${phaseIndex}')">
            <span>${LANG === 'ar' ? '→' : '←'}</span> ${T.back}
          </button>
          <p>${T.noQuiz}</p>
        </div>
      `;
    }

    quizState = {
      phaseIndex,
      questions: [...phase.quiz],
      currentQuestion: 0,
      score: 0,
      answers: [],
      answered: false,
    };

    return renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const { questions, currentQuestion, phaseIndex, answered, answers } = quizState;

    if (currentQuestion >= questions.length) {
      return renderQuizResults();
    }

    const q = questions[currentQuestion];
    const total = questions.length;
    const lastAnswer = answered ? answers[answers.length - 1] : null;

    let boardHTML = '';
    if (q.position) {
      const boardId = `quiz-board-${currentQuestion}`;
      boardHTML = `
        <div class="chess-board-wrapper quiz-board">
          <div id="${boardId}" class="chess-board-container"></div>
        </div>
      `;
      setTimeout(() => {
        const el = document.getElementById(boardId);
        if (el && typeof ChessBoard !== 'undefined') {
          const board = new ChessBoard(el, {
            position: q.position,
            highlights: q.highlights || [],
            arrows: q.arrows || [],
            interactive: false,
          });
          board.render();
        }
      }, 100);
    }

    const options = (q.options || []).map((opt, i) => {
      let btnClass = 'quiz-option';
      let disabled = '';

      if (answered) {
        disabled = 'disabled';
        if (i === q.correct) {
          btnClass += ' correct';
        } else if (lastAnswer && lastAnswer.selected === i && i !== q.correct) {
          btnClass += ' wrong';
        }
      }

      return `
        <button class="${btnClass}" ${disabled}
                onclick="App.answerQuiz(${i})"
                data-index="${i}">
          ${opt}
        </button>
      `;
    }).join('');

    let feedbackHTML = '';
    if (answered && lastAnswer) {
      const isCorrect = lastAnswer.selected === q.correct;
      feedbackHTML = `
        <div class="quiz-feedback ${isCorrect ? 'correct' : 'wrong'}">
          <div class="feedback-icon">${isCorrect ? '✓' : '✗'}</div>
          <div class="feedback-text">
            ${isCorrect ? T.correctAnswer : `${T.wrongAnswer} ${q.options[q.correct]}`}
            ${q.explanation ? `<p class="feedback-explanation">${q.explanation}</p>` : ''}
          </div>
        </div>
        <button class="btn btn-primary quiz-next-btn" onclick="App.nextQuestion()">
          ${currentQuestion < total - 1 ? T.nextQuestion : T.showResults}
        </button>
      `;
    }

    return `
      <div class="quiz-view">
        <div class="quiz-header">
          <button class="back-btn" onclick="App.navigate('/phase/${phaseIndex}')">
            <span>${LANG === 'ar' ? '→' : '←'}</span> ${T.back}
          </button>
          <div class="quiz-progress">
            <span class="quiz-counter">${currentQuestion + 1} / ${total}</span>
            <div class="quiz-progress-bar">
              <div class="quiz-progress-fill" style="width: ${((currentQuestion + (answered ? 1 : 0)) / total) * 100}%"></div>
            </div>
          </div>
        </div>

        <div class="quiz-question">
          <h3>${q.question}</h3>
          ${boardHTML}
          <div class="quiz-options">
            ${options}
          </div>
          ${feedbackHTML}
        </div>
      </div>
    `;
  }

  function answerQuiz(optionIndex) {
    if (quizState.answered) return;

    const q = quizState.questions[quizState.currentQuestion];
    const isCorrect = optionIndex === q.correct;

    quizState.answered = true;
    quizState.answers.push({
      questionIndex: quizState.currentQuestion,
      selected: optionIndex,
      correct: q.correct,
      isCorrect,
    });

    if (isCorrect) {
      quizState.score++;
      addXP(XP_CORRECT_QUIZ);
    }

    rerender();
  }

  function nextQuestion() {
    quizState.currentQuestion++;
    quizState.answered = false;
    rerender();
  }

  function renderQuizResults() {
    const { phaseIndex, questions, score, answers } = quizState;
    const total = questions.length;
    const percentage = Math.round((score / total) * 100);
    const passed = percentage >= 70;

    // Save results
    const progress = Storage.getProgress();
    progress.quizResults[phaseIndex] = { score, total, percentage, date: new Date().toISOString() };
    Storage.saveProgress(progress);

    // Check if phase is now fully complete
    if (passed && isPhaseCompleted(phaseIndex)) {
      const prog = Storage.getProgress();
      if (!prog.phaseCompletions.includes(phaseIndex)) {
        prog.phaseCompletions.push(phaseIndex);
        Storage.saveProgress(prog);
        addXP(XP_COMPLETE_PHASE);
      }
    }

    let emoji, message;
    if (percentage === 100) {
      emoji = '🏆';
      message = T.perfect;
    } else if (percentage >= 70) {
      emoji = '🎉';
      message = T.passed;
    } else {
      emoji = '💪';
      message = T.tryAgain;
    }

    const reviewHTML = answers.map((a, i) => {
      const q = questions[a.questionIndex];
      return `
        <div class="review-item ${a.isCorrect ? 'correct' : 'wrong'}">
          <div class="review-indicator">${a.isCorrect ? '✓' : '✗'}</div>
          <div class="review-content">
            <p class="review-question">${q.question}</p>
            <p class="review-answer">${T.yourAnswer} ${q.options[a.selected]}</p>
            ${!a.isCorrect ? `<p class="review-correct">${T.correctIs} ${q.options[q.correct]}</p>` : ''}
          </div>
        </div>
      `;
    }).join('');

    if (passed) {
      setTimeout(launchConfetti, 300);
    }

    return `
      <div class="quiz-results">
        <div class="results-header">
          <div class="results-emoji">${emoji}</div>
          <h2>${message}</h2>
          <div class="results-score">
            <span class="score-big">${score}</span>
            <span class="score-divider">/</span>
            <span class="score-total">${total}</span>
          </div>
          <div class="results-percentage">${percentage}%</div>
        </div>

        <div class="results-review">
          <h3>${T.reviewAnswers}</h3>
          ${reviewHTML}
        </div>

        <div class="results-actions">
          ${!passed ? `
            <button class="btn btn-primary" onclick="App.navigate('/phase/${phaseIndex}/quiz')">
              ${T.retryQuiz}
            </button>
          ` : ''}
          <button class="btn btn-secondary" onclick="App.navigate('/phase/${phaseIndex}')">
            ${T.backToPhase}
          </button>
          ${passed && phaseIndex < (getLessons() || []).length - 1 ? `
            <button class="btn btn-primary" onclick="App.navigate('/phase/${phaseIndex + 1}')">
              ${T.nextPhase}
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }

  // ─── Paywall ─────────────────────────────────────────────────────────────────

  function renderPaywall() {
    return `
      <div class="paywall">
        <div class="paywall-preview">
          <div class="preview-fade"></div>
          <p>${T.premiumContent}</p>
          <p>${T.discoverSecrets}</p>
        </div>

        <div class="paywall-card">
          <div class="paywall-icon">👑</div>
          <h2>${T.premiumMembership}</h2>
          <p class="paywall-desc">${T.getFullAccess}</p>

          <div class="paywall-features">
            <div class="paywall-feature">✓ ${T.feature1}</div>
            <div class="paywall-feature">✓ ${T.feature2}</div>
            <div class="paywall-feature">✓ ${T.feature3}</div>
            <div class="paywall-feature">✓ ${T.feature4}</div>
            <div class="paywall-feature">✓ ${T.feature5}</div>
          </div>

          <a href="${GUMROAD_URL}" target="_blank" rel="noopener" class="btn btn-purchase">
            ${T.buyNow}
          </a>

          <div class="paywall-divider">
            <span>${T.or}</span>
          </div>

          <div class="access-code-form">
            <label for="access-code">${T.enterAccessCode}</label>
            <div class="code-input-group">
              <input type="text" id="access-code" placeholder="${T.enterCodePlaceholder}"
                     onkeydown="if(event.key==='Enter')App.verifyCode()">
              <button class="btn btn-verify" onclick="App.verifyCode()">${T.verify}</button>
            </div>
            <p id="code-error" class="code-error" style="display:none"></p>
          </div>
        </div>

        <button class="back-btn paywall-back" onclick="App.navigate('/')">
          <span>${LANG === 'ar' ? '→' : '←'}</span> ${T.backToFreePhases}
        </button>
      </div>
    `;
  }

  async function verifyCode() {
    const input = document.getElementById('access-code');
    const errorEl = document.getElementById('code-error');
    if (!input || !errorEl) return;

    const code = input.value.trim();
    if (!code) {
      errorEl.textContent = T.enterTheCode;
      errorEl.style.display = 'block';
      return;
    }

    errorEl.style.display = 'none';
    input.disabled = true;

    const valid = await verifyAccessCode(code);

    if (valid) {
      Storage.grantAccess();
      showToast(T.accessActivated, 'success');
      launchConfetti();
      setTimeout(() => App.navigate('/'), 1500);
    } else {
      errorEl.textContent = T.wrongAccessCode;
      errorEl.style.display = 'block';
      input.disabled = false;
      input.focus();
    }
  }

  // ─── Phase Completion Screen ─────────────────────────────────────────────────

  function renderCompletion(phaseIndex) {
    const lessons = getLessons();
    if (!lessons || !lessons[phaseIndex]) return renderNotFound();

    const phase = lessons[phaseIndex];
    const hasNext = phaseIndex < lessons.length - 1;
    const nextAccessible = hasNext && isPhaseAccessible(phaseIndex + 1);

    // Achievement check
    const achievements = [];
    if (phaseIndex === 0) achievements.push({ icon: '🏅', name: T.firstStep, desc: T.firstStepDesc });
    if (phaseIndex === lessons.length - 1) achievements.push({ icon: '🏆', name: T.master, desc: T.masterDesc });

    const progress = Storage.getProgress();
    for (const ach of achievements) {
      if (!progress.achievements.includes(ach.name)) {
        progress.achievements.push(ach.name);
      }
    }
    Storage.saveProgress(progress);

    setTimeout(launchConfetti, 200);

    const achievementsHTML = achievements.map(a => `
      <div class="achievement-card">
        <div class="achievement-icon">${a.icon}</div>
        <div class="achievement-info">
          <h4>${a.name}</h4>
          <p>${a.desc}</p>
        </div>
      </div>
    `).join('');

    return `
      <div class="completion-view">
        <div class="completion-header">
          <div class="completion-icon">🎉</div>
          <h2>${T.wellDone} ${phase.title || `${T.phase} ${phaseIndex + 1}`}</h2>
          <div class="xp-earned">
            <span class="xp-icon">⭐</span>
            <span>+${XP_COMPLETE_PHASE} XP</span>
          </div>
        </div>

        ${achievementsHTML ? `
          <div class="achievements-section">
            <h3>${T.newAchievements}</h3>
            ${achievementsHTML}
          </div>
        ` : ''}

        <div class="completion-stats">
          <div class="stat-card">
            <div class="stat-number">${(phase.concepts || []).length}</div>
            <div class="stat-name">${T.lessonsCompleted}</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">${progress.xp}</div>
            <div class="stat-name">${T.xpPoints}</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">${getLevel(progress.xp).name}</div>
            <div class="stat-name">${T.level}</div>
          </div>
        </div>

        <div class="completion-actions">
          ${hasNext && nextAccessible ? `
            <button class="btn btn-primary btn-large"
                    onclick="App.navigate('/phase/${phaseIndex + 1}')">
              ${T.nextPhase}
            </button>
          ` : hasNext ? `
            <button class="btn btn-primary btn-large"
                    onclick="App.navigate('/paywall')">
              ${T.unlockAdvanced} 👑
            </button>
          ` : ''}
          <button class="btn btn-secondary" onclick="App.navigate('/')">
            ${T.backToHome}
          </button>
        </div>
      </div>
    `;
  }

  // ─── Settings ────────────────────────────────────────────────────────────────

  function renderSettings() {
    const progress = Storage.getProgress();
    const level = getLevel(progress.xp || 0);

    return `
      <div class="settings-view">
        <div class="section-header">
          <button class="back-btn" onclick="App.navigate('/')">
            <span>${LANG === 'ar' ? '→' : '←'}</span> ${T.back}
          </button>
          <h2>⚙ ${T.settings}</h2>
        </div>

        <div class="settings-section">
          <h3>${T.statistics}</h3>
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-label">${T.xpLabel}</span>
              <span class="stat-value">${progress.xp || 0} XP</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">${T.level}</span>
              <span class="stat-value">${level.name}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">${T.consecutiveDaysLabel}</span>
              <span class="stat-value">${progress.streak || 0} 🔥</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">${T.completedLessons}</span>
              <span class="stat-value">${progress.completedConcepts.length}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">${T.overallProgress}</span>
              <span class="stat-value">${getOverallProgress()}%</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">${T.access}</span>
              <span class="stat-value">${progress.access ? T.fullAccess + ' 👑' : T.freeAccess}</span>
            </div>
          </div>
        </div>

        ${progress.achievements.length > 0 ? `
          <div class="settings-section">
            <h3>${T.achievements}</h3>
            <div class="achievements-list">
              ${progress.achievements.map(a => `<span class="achievement-tag">${a}</span>`).join('')}
            </div>
          </div>
        ` : ''}

        <div class="settings-section">
          <h3>${T.data}</h3>
          <div class="settings-actions">
            <button class="btn btn-secondary" onclick="App.exportData()">
              📤 ${T.exportData}
            </button>
            <button class="btn btn-secondary" onclick="App.showImportDialog()">
              📥 ${T.importDataLabel}
            </button>
            <button class="btn btn-danger" onclick="App.confirmReset()">
              🗑 ${T.resetProgress}
            </button>
          </div>
        </div>

        <div id="import-dialog" class="import-dialog" style="display:none">
          <h4>${T.importDataTitle}</h4>
          <textarea id="import-data" placeholder="${T.pasteJSON}" rows="6"></textarea>
          <div class="dialog-actions">
            <button class="btn btn-primary" onclick="App.importData()">${T.import}</button>
            <button class="btn btn-secondary" onclick="document.getElementById('import-dialog').style.display='none'">${T.cancel}</button>
          </div>
        </div>

        ${!progress.access ? `
          <div class="settings-section">
            <h3>${T.activateFullAccess}</h3>
            <div class="code-input-group">
              <input type="text" id="settings-access-code" placeholder="${T.enterCodePlaceholder}"
                     onkeydown="if(event.key==='Enter')App.verifySettingsCode()">
              <button class="btn btn-verify" onclick="App.verifySettingsCode()">${T.verify}</button>
            </div>
            <p id="settings-code-error" class="code-error" style="display:none"></p>
          </div>
        ` : ''}
      </div>
    `;
  }

  function exportData() {
    const data = Storage.exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chess-academy-progress.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast(T.exportSuccess, 'success');
  }

  function showImportDialog() {
    const dialog = document.getElementById('import-dialog');
    if (dialog) dialog.style.display = 'block';
  }

  function importData() {
    const textarea = document.getElementById('import-data');
    if (!textarea) return;

    const success = Storage.importData(textarea.value);
    if (success) {
      showToast(T.importSuccess, 'success');
      App.navigate('/settings');
    } else {
      showToast(T.importFailed, 'error');
    }
  }

  function confirmReset() {
    const overlay = document.createElement('div');
    overlay.className = 'confirm-overlay';
    overlay.innerHTML = `
      <div class="confirm-dialog">
        <h3>⚠️ ${T.confirm}</h3>
        <p>${T.resetConfirm}</p>
        <div class="dialog-actions">
          <button class="btn btn-danger" onclick="App.doReset()">${T.deleteAll}</button>
          <button class="btn btn-secondary" onclick="this.closest('.confirm-overlay').remove()">${T.cancel}</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  function doReset() {
    Storage.resetProgress();
    document.querySelector('.confirm-overlay')?.remove();
    showToast(T.resetDone, 'info');
    App.navigate('/');
  }

  async function verifySettingsCode() {
    const input = document.getElementById('settings-access-code');
    const errorEl = document.getElementById('settings-code-error');
    if (!input || !errorEl) return;

    const code = input.value.trim();
    if (!code) {
      errorEl.textContent = T.enterTheCode;
      errorEl.style.display = 'block';
      return;
    }

    const valid = await verifyAccessCode(code);
    if (valid) {
      Storage.grantAccess();
      showToast(T.fullAccessActivated, 'success');
      launchConfetti();
      setTimeout(() => App.navigate('/settings'), 1000);
    } else {
      errorEl.textContent = T.wrongCode;
      errorEl.style.display = 'block';
    }
  }

  // ─── Error / Fallback Views ──────────────────────────────────────────────────

  function renderNoData() {
    return `
      <div class="error-view">
        <div class="error-icon">⚠️</div>
        <h2>${T.dataNotFound}</h2>
        <p>${T.dataNotFoundDesc}</p>
        <button class="btn btn-primary" onclick="location.reload()">${T.retry}</button>
      </div>
    `;
  }

  function renderNotFound() {
    return `
      <div class="error-view">
        <div class="error-icon">🔍</div>
        <h2>${T.pageNotFound}</h2>
        <p>${T.pageNotFoundDesc}</p>
        <button class="btn btn-primary" onclick="App.navigate('/')">${T.backToHome}</button>
      </div>
    `;
  }

  // ─── Router ──────────────────────────────────────────────────────────────────

  function parseRoute() {
    const hash = window.location.hash || '#/';
    const path = hash.replace('#', '');
    const parts = path.split('/').filter(Boolean);

    if (parts.length === 0) {
      return { view: 'phaseList' };
    }

    if (parts[0] === 'settings') {
      return { view: 'settings' };
    }

    if (parts[0] === 'paywall') {
      return { view: 'paywall' };
    }

    if (parts[0] === 'phase') {
      const phaseIndex = parseInt(parts[1], 10);
      if (isNaN(phaseIndex)) return { view: 'phaseList' };

      if (parts[2] === 'concept') {
        const conceptIndex = parseInt(parts[3], 10);
        if (isNaN(conceptIndex)) return { view: 'conceptList', phaseIndex };
        return { view: 'concept', phaseIndex, conceptIndex };
      }

      if (parts[2] === 'quiz') {
        return { view: 'quiz', phaseIndex };
      }

      if (parts[2] === 'complete') {
        return { view: 'completion', phaseIndex };
      }

      return { view: 'conceptList', phaseIndex };
    }

    return { view: 'phaseList' };
  }

  function navigate(path) {
    window.location.hash = '#' + path;
  }

  function renderCurrentRoute() {
    const route = parseRoute();
    let content = '';

    switch (route.view) {
      case 'phaseList':
        content = renderPhaseList();
        break;
      case 'conceptList':
        content = renderConceptList(route.phaseIndex);
        break;
      case 'concept':
        content = renderConcept(route.phaseIndex, route.conceptIndex);
        break;
      case 'quiz':
        content = renderQuiz(route.phaseIndex);
        break;
      case 'completion':
        content = renderCompletion(route.phaseIndex);
        break;
      case 'paywall':
        content = renderPaywall();
        break;
      case 'settings':
        content = renderSettings();
        break;
      default:
        content = renderPhaseList();
    }

    return content;
  }

  function rerender() {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    const route = parseRoute();
    let content;

    // For quiz, use specialized re-render
    if (route.view === 'quiz' && quizState.questions.length > 0) {
      content = renderQuizQuestion();
    } else {
      content = renderCurrentRoute();
    }

    appEl.innerHTML = renderHeader() + `<main class="app-main">${content}</main>`;
    window.scrollTo(0, 0);
  }

  // ─── Complete Concept Action ─────────────────────────────────────────────────

  function completeConcept(phaseIndex, conceptIndex) {
    markConceptCompleted(phaseIndex, conceptIndex);

    const lessons = getLessons();
    if (!lessons) return;

    const phase = lessons[phaseIndex];
    const concepts = phase.concepts || [];

    // Check if phase is complete
    if (isPhaseCompleted(phaseIndex)) {
      navigate(`/phase/${phaseIndex}/complete`);
      return;
    }

    // Go to next concept
    if (conceptIndex < concepts.length - 1) {
      navigate(`/phase/${phaseIndex}/concept/${conceptIndex + 1}`);
    } else {
      navigate(`/phase/${phaseIndex}`);
    }
  }

  // ─── Keyboard Navigation ────────────────────────────────────────────────────

  function handleKeyboard(e) {
    const route = parseRoute();

    if (route.view === 'quiz') {
      handleQuizKeyboard(e);
      return;
    }

    if (route.view === 'concept') {
      handleConceptKeyboard(e, route);
      return;
    }
  }

  function handleQuizKeyboard(e) {
    if (quizState.answered) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        nextQuestion();
      }
      return;
    }

    const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3 };
    if (keyMap[e.key] !== undefined) {
      e.preventDefault();
      answerQuiz(keyMap[e.key]);
      return;
    }

    // Arrow keys for option focus
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      const options = document.querySelectorAll('.quiz-option:not([disabled])');
      if (options.length === 0) return;

      const focused = document.activeElement;
      let idx = Array.from(options).indexOf(focused);

      if (e.key === 'ArrowUp') {
        idx = idx <= 0 ? options.length - 1 : idx - 1;
      } else {
        idx = idx >= options.length - 1 ? 0 : idx + 1;
      }

      options[idx].focus();
    }

    if (e.key === 'Enter') {
      const focused = document.activeElement;
      if (focused && focused.classList.contains('quiz-option')) {
        e.preventDefault();
        const idx = parseInt(focused.dataset.index, 10);
        if (!isNaN(idx)) answerQuiz(idx);
      }
    }
  }

  function handleConceptKeyboard(e, route) {
    const lessons = getLessons();
    if (!lessons) return;

    const phase = lessons[route.phaseIndex];
    if (!phase) return;

    const concepts = phase.concepts || [];

    if (e.key === 'ArrowLeft') {
      // Next concept (RTL)
      if (route.conceptIndex < concepts.length - 1) {
        e.preventDefault();
        navigate(`/phase/${route.phaseIndex}/concept/${route.conceptIndex + 1}`);
      }
    } else if (e.key === 'ArrowRight') {
      // Previous concept (RTL)
      if (route.conceptIndex > 0) {
        e.preventDefault();
        navigate(`/phase/${route.phaseIndex}/concept/${route.conceptIndex - 1}`);
      }
    } else if (e.key === 'Enter') {
      // Complete concept
      if (!isConceptCompleted(route.phaseIndex, route.conceptIndex)) {
        e.preventDefault();
        completeConcept(route.phaseIndex, route.conceptIndex);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      navigate(`/phase/${route.phaseIndex}`);
    }
  }

  // ─── Styles ──────────────────────────────────────────────────────────────────

  function injectStyles() {
    if (document.getElementById('chess-academy-styles')) return;

    const style = document.createElement('style');
    style.id = 'chess-academy-styles';
    style.textContent = `
      :root {
        --primary: #1a73e8;
        --primary-dark: #1557b0;
        --primary-light: #e8f0fe;
        --success: #0d904f;
        --success-light: #e6f4ea;
        --danger: #d93025;
        --danger-light: #fce8e6;
        --warning: #f9ab00;
        --warning-light: #fef7e0;
        --text: #202124;
        --text-secondary: #5f6368;
        --bg: #f8f9fa;
        --card-bg: #ffffff;
        --border: #dadce0;
        --shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08);
        --shadow-lg: 0 4px 12px rgba(0,0,0,0.15);
        --radius: 12px;
        --radius-sm: 8px;
        --font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      * { box-sizing: border-box; margin: 0; padding: 0; }

      body {
        font-family: var(--font);
        background: var(--bg);
        color: var(--text);
        direction: ${LANG === 'ar' ? 'rtl' : 'ltr'};
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
      }

      #app {
        min-height: 100vh;
        max-width: 900px;
        margin: 0 auto;
        padding-bottom: 40px;
      }

      /* ─── Header ─── */
      .app-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        background: var(--card-bg);
        border-bottom: 1px solid var(--border);
        position: sticky;
        top: 0;
        z-index: 100;
        gap: 12px;
      }

      .header-right, .header-left, .header-center {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .header-center { flex: 1; max-width: 200px; }

      .header-title {
        font-size: 16px;
        font-weight: 700;
        white-space: nowrap;
      }

      .header-btn {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 10px;
        border-radius: var(--radius-sm);
        color: var(--text);
        font-size: 14px;
        transition: background 0.2s;
      }

      .header-btn:hover { background: var(--primary-light); }

      .header-btn .icon { font-size: 20px; }

      .header-stat {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 13px;
        padding: 4px 8px;
        border-radius: 20px;
        background: var(--bg);
      }

      .stat-icon { font-size: 14px; }
      .stat-value { font-weight: 700; }
      .stat-label { color: var(--text-secondary); font-size: 11px; }

      .progress-bar-container {
        width: 100%;
        height: 8px;
        background: var(--border);
        border-radius: 4px;
        position: relative;
        overflow: hidden;
      }

      .progress-bar {
        height: 100%;
        background: linear-gradient(90deg, var(--primary), #4fc3f7);
        border-radius: 4px;
        transition: width 0.5s ease;
      }

      .progress-bar-container .progress-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 7px;
        font-weight: 700;
        color: var(--text);
        display: none;
      }

      /* ─── Main ─── */
      .app-main { padding: 20px 16px; }

      .section-header {
        margin-bottom: 24px;
      }

      .section-header h2 {
        font-size: 24px;
        margin-bottom: 6px;
      }

      .section-header p {
        color: var(--text-secondary);
        font-size: 14px;
      }

      .back-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: none;
        border: none;
        color: var(--primary);
        font-size: 14px;
        cursor: pointer;
        padding: 6px 0;
        margin-bottom: 12px;
        font-family: var(--font);
      }

      .back-btn:hover { text-decoration: underline; }

      /* ─── Phase List ─── */
      .phases-grid {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .phase-card {
        display: flex;
        align-items: center;
        gap: 16px;
        background: var(--card-bg);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 16px;
        cursor: pointer;
        transition: box-shadow 0.2s, transform 0.15s;
        position: relative;
      }

      .phase-card:hover {
        box-shadow: var(--shadow-lg);
        transform: translateY(-2px);
      }

      .phase-card:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
      }

      .phase-card.locked {
        opacity: 0.65;
        cursor: pointer;
      }

      .phase-card.completed {
        border-color: var(--success);
        background: var(--success-light);
      }

      .phase-icon {
        font-size: 36px;
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--primary-light);
        border-radius: var(--radius-sm);
        flex-shrink: 0;
      }

      .phase-card.completed .phase-icon {
        background: var(--success-light);
      }

      .phase-info { flex: 1; min-width: 0; }

      .phase-title {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 2px;
      }

      .phase-desc {
        font-size: 13px;
        color: var(--text-secondary);
        margin-bottom: 6px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .phase-meta {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        color: var(--text-secondary);
        margin-bottom: 8px;
      }

      .quiz-badge {
        background: var(--warning-light);
        color: #9a6700;
        padding: 1px 8px;
        border-radius: 10px;
        font-size: 11px;
        font-weight: 600;
      }

      .phase-progress-bar {
        height: 6px;
        background: var(--border);
        border-radius: 3px;
        overflow: hidden;
        position: relative;
      }

      .phase-progress-bar.large {
        height: 10px;
        margin-top: 12px;
        border-radius: 5px;
      }

      .phase-progress-bar .progress-text {
        position: absolute;
        ${LANG === 'ar' ? 'right' : 'left'}: 0;
        top: -18px;
        font-size: 12px;
        font-weight: 600;
        color: var(--primary);
      }

      .phase-progress-fill {
        height: 100%;
        background: var(--primary);
        border-radius: 3px;
        transition: width 0.5s ease;
      }

      .phase-card.completed .phase-progress-fill {
        background: var(--success);
      }

      .phase-check {
        font-size: 24px;
        color: var(--success);
        font-weight: 700;
      }

      /* ─── Concept List ─── */
      .concepts-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;
      }

      .concept-card {
        display: flex;
        align-items: center;
        gap: 12px;
        background: var(--card-bg);
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        padding: 14px 16px;
        cursor: pointer;
        transition: box-shadow 0.2s;
      }

      .concept-card:hover { box-shadow: var(--shadow); }

      .concept-card:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
      }

      .concept-card.completed {
        ${LANG === 'ar' ? 'border-right' : 'border-left'}: 3px solid var(--success);
      }

      .concept-number {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--primary-light);
        color: var(--primary);
        border-radius: 50%;
        font-size: 14px;
        font-weight: 700;
        flex-shrink: 0;
      }

      .concept-card.completed .concept-number {
        background: var(--success);
        color: white;
      }

      .concept-info { flex: 1; min-width: 0; }

      .concept-title {
        font-size: 15px;
        font-weight: 600;
      }

      .concept-subtitle {
        font-size: 12px;
        color: var(--text-secondary);
        margin-top: 2px;
      }

      .concept-arrow {
        color: var(--text-secondary);
        font-size: 18px;
      }

      .quiz-card {
        display: flex;
        align-items: center;
        gap: 12px;
        background: var(--warning-light);
        border: 1px solid #f0d060;
        border-radius: var(--radius-sm);
        padding: 14px 16px;
        cursor: pointer;
        transition: box-shadow 0.2s;
      }

      .quiz-card:hover { box-shadow: var(--shadow); }

      .quiz-icon { font-size: 28px; }

      .quiz-info h4 { font-size: 15px; font-weight: 600; }
      .quiz-info p { font-size: 12px; color: var(--text-secondary); }

      /* ─── Concept View ─── */
      .concept-view { max-width: 700px; margin: 0 auto; }

      .concept-nav-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
      }

      .concept-counter {
        font-size: 13px;
        color: var(--text-secondary);
        background: var(--bg);
        padding: 4px 12px;
        border-radius: 20px;
      }

      .concept-content {
        background: var(--card-bg);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 24px;
        margin-bottom: 20px;
      }

      .concept-main-title {
        font-size: 22px;
        margin-bottom: 4px;
      }

      .concept-main-subtitle {
        color: var(--text-secondary);
        font-size: 14px;
        margin-bottom: 20px;
      }

      .concept-body {
        font-size: 15px;
        line-height: 1.8;
      }

      .concept-body p { margin-bottom: 12px; }
      .concept-body ul, .concept-body ol { margin: 12px 20px; }
      .concept-body li { margin-bottom: 6px; }
      .concept-body strong { color: var(--primary-dark); }

      /* ─── Chess Board ─── */
      .chess-board-wrapper, .chess-sequence-wrapper {
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .chess-board-container {
        max-width: 400px;
        width: 100%;
      }

      .board-caption {
        margin-top: 8px;
        font-size: 13px;
        color: var(--text-secondary);
        text-align: center;
      }

      .sequence-controls {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 12px;
      }

      .seq-btn {
        padding: 8px 16px;
        background: var(--primary);
        color: white;
        border: none;
        border-radius: var(--radius-sm);
        cursor: pointer;
        font-family: var(--font);
        font-size: 13px;
        transition: background 0.2s;
      }

      .seq-btn:hover { background: var(--primary-dark); }

      .seq-counter {
        font-size: 13px;
        color: var(--text-secondary);
        min-width: 40px;
        text-align: center;
      }

      /* ─── Info Boxes ─── */
      .info-box {
        margin: 16px 0;
        border-radius: var(--radius-sm);
        padding: 16px;
        border: 1px solid;
      }

      .info-box-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
        font-weight: 700;
        font-size: 14px;
      }

      .info-box-icon { font-size: 18px; }

      .info-box-content {
        font-size: 14px;
        line-height: 1.7;
      }

      .mistake-box {
        background: var(--danger-light);
        border-color: #f5c6c2;
      }

      .analogy-box {
        background: var(--primary-light);
        border-color: #c4dafa;
      }

      .practice-box {
        background: var(--success-light);
        border-color: #b7e1cd;
      }

      .tips-box {
        background: var(--warning-light);
        border-color: #f0d060;
      }

      .tips-list {
        list-style: none;
        padding: 0;
      }

      .tips-list li {
        padding: 4px 0;
        font-size: 14px;
      }

      .tips-list li::before {
        content: '📌 ';
      }

      /* ─── Concept Actions ─── */
      .concept-actions {
        text-align: center;
        margin-bottom: 20px;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 10px 24px;
        border: none;
        border-radius: var(--radius-sm);
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        font-family: var(--font);
        text-decoration: none;
      }

      .btn-primary {
        background: var(--primary);
        color: white;
      }

      .btn-primary:hover { background: var(--primary-dark); }

      .btn-secondary {
        background: var(--bg);
        color: var(--text);
        border: 1px solid var(--border);
      }

      .btn-secondary:hover { background: var(--border); }

      .btn-danger {
        background: var(--danger);
        color: white;
      }

      .btn-danger:hover { background: #c62828; }

      .btn-purchase {
        background: linear-gradient(135deg, #f59e0b, #d97706);
        color: white;
        padding: 14px 32px;
        font-size: 16px;
        width: 100%;
      }

      .btn-purchase:hover { filter: brightness(1.1); }

      .btn-verify {
        background: var(--primary);
        color: white;
        padding: 10px 20px;
      }

      .btn-large {
        padding: 14px 32px;
        font-size: 16px;
      }

      .btn-complete {
        padding: 12px 32px;
        font-size: 15px;
      }

      .completed-badge {
        display: inline-block;
        padding: 10px 24px;
        background: var(--success-light);
        color: var(--success);
        border-radius: var(--radius-sm);
        font-weight: 700;
        font-size: 15px;
      }

      .concept-nav-bottom {
        display: flex;
        justify-content: space-between;
        gap: 12px;
      }

      /* ─── Quiz ─── */
      .quiz-view { max-width: 600px; margin: 0 auto; }

      .quiz-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
      }

      .quiz-progress { flex: 1; max-width: 200px; }

      .quiz-counter {
        font-size: 13px;
        color: var(--text-secondary);
        display: block;
        margin-bottom: 4px;
        text-align: center;
      }

      .quiz-progress-bar {
        height: 6px;
        background: var(--border);
        border-radius: 3px;
        overflow: hidden;
      }

      .quiz-progress-fill {
        height: 100%;
        background: var(--primary);
        border-radius: 3px;
        transition: width 0.3s;
      }

      .quiz-question {
        background: var(--card-bg);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 24px;
      }

      .quiz-question h3 {
        font-size: 18px;
        margin-bottom: 16px;
        line-height: 1.5;
      }

      .quiz-board { margin-bottom: 16px; }

      .quiz-options {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .quiz-option {
        display: block;
        width: 100%;
        text-align: ${LANG === 'ar' ? 'right' : 'left'};
        padding: 14px 16px;
        background: var(--bg);
        border: 2px solid var(--border);
        border-radius: var(--radius-sm);
        font-size: 15px;
        cursor: pointer;
        transition: all 0.2s;
        font-family: var(--font);
      }

      .quiz-option:hover:not([disabled]) {
        border-color: var(--primary);
        background: var(--primary-light);
      }

      .quiz-option:focus-visible {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(26,115,232,0.3);
      }

      .quiz-option.correct {
        border-color: var(--success);
        background: var(--success-light);
        color: var(--success);
        font-weight: 600;
      }

      .quiz-option.wrong {
        border-color: var(--danger);
        background: var(--danger-light);
        color: var(--danger);
      }

      .quiz-option[disabled] { cursor: default; }

      .quiz-feedback {
        margin-top: 16px;
        padding: 14px;
        border-radius: var(--radius-sm);
        display: flex;
        align-items: flex-start;
        gap: 10px;
      }

      .quiz-feedback.correct {
        background: var(--success-light);
        border: 1px solid #b7e1cd;
      }

      .quiz-feedback.wrong {
        background: var(--danger-light);
        border: 1px solid #f5c6c2;
      }

      .feedback-icon {
        font-size: 20px;
        font-weight: 700;
        flex-shrink: 0;
      }

      .quiz-feedback.correct .feedback-icon { color: var(--success); }
      .quiz-feedback.wrong .feedback-icon { color: var(--danger); }

      .feedback-text { font-size: 14px; line-height: 1.5; }

      .feedback-explanation {
        margin-top: 6px;
        color: var(--text-secondary);
        font-size: 13px;
      }

      .quiz-next-btn {
        margin-top: 16px;
        width: 100%;
      }

      /* ─── Quiz Results ─── */
      .quiz-results { max-width: 600px; margin: 0 auto; text-align: center; }

      .results-header {
        padding: 32px 0;
      }

      .results-emoji { font-size: 64px; margin-bottom: 12px; }

      .results-header h2 {
        font-size: 22px;
        margin-bottom: 16px;
      }

      .results-score {
        display: flex;
        align-items: baseline;
        justify-content: center;
        gap: 4px;
        margin-bottom: 4px;
      }

      .score-big { font-size: 48px; font-weight: 800; color: var(--primary); }
      .score-divider { font-size: 24px; color: var(--text-secondary); }
      .score-total { font-size: 24px; color: var(--text-secondary); }

      .results-percentage {
        font-size: 18px;
        color: var(--text-secondary);
        margin-bottom: 24px;
      }

      .results-review {
        text-align: ${LANG === 'ar' ? 'right' : 'left'};
        margin-bottom: 24px;
      }

      .results-review h3 {
        font-size: 16px;
        margin-bottom: 12px;
      }

      .review-item {
        display: flex;
        gap: 10px;
        padding: 12px;
        border-radius: var(--radius-sm);
        margin-bottom: 8px;
      }

      .review-item.correct { background: var(--success-light); }
      .review-item.wrong { background: var(--danger-light); }

      .review-indicator {
        font-weight: 700;
        font-size: 18px;
        flex-shrink: 0;
      }

      .review-item.correct .review-indicator { color: var(--success); }
      .review-item.wrong .review-indicator { color: var(--danger); }

      .review-question { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
      .review-answer { font-size: 13px; color: var(--text-secondary); }
      .review-correct { font-size: 13px; color: var(--success); font-weight: 600; }

      .results-actions {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
      }

      .results-actions .btn { min-width: 200px; }

      /* ─── Paywall ─── */
      .paywall { max-width: 500px; margin: 0 auto; }

      .paywall-preview {
        position: relative;
        padding: 20px;
        margin-bottom: 24px;
        color: var(--text-secondary);
        font-size: 15px;
        line-height: 1.8;
      }

      .preview-fade {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60px;
        background: linear-gradient(transparent, var(--bg));
      }

      .paywall-card {
        background: var(--card-bg);
        border: 2px solid var(--warning);
        border-radius: var(--radius);
        padding: 32px 24px;
        text-align: center;
        margin-bottom: 20px;
      }

      .paywall-icon { font-size: 48px; margin-bottom: 12px; }

      .paywall-card h2 {
        font-size: 22px;
        margin-bottom: 8px;
      }

      .paywall-desc {
        color: var(--text-secondary);
        font-size: 14px;
        margin-bottom: 20px;
      }

      .paywall-features {
        text-align: ${LANG === 'ar' ? 'right' : 'left'};
        margin-bottom: 24px;
      }

      .paywall-feature {
        padding: 6px 0;
        font-size: 14px;
        color: var(--text);
      }

      .paywall-divider {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 20px 0;
        color: var(--text-secondary);
        font-size: 13px;
      }

      .paywall-divider::before,
      .paywall-divider::after {
        content: '';
        flex: 1;
        height: 1px;
        background: var(--border);
      }

      .access-code-form label {
        display: block;
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 600;
      }

      .code-input-group {
        display: flex;
        gap: 8px;
      }

      .code-input-group input {
        flex: 1;
        padding: 10px 14px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        font-size: 14px;
        font-family: var(--font);
        direction: ltr;
        text-align: left;
      }

      .code-input-group input:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(26,115,232,0.15);
      }

      .code-error {
        color: var(--danger);
        font-size: 13px;
        margin-top: 8px;
      }

      .paywall-back { margin-top: 12px; }

      /* ─── Completion ─── */
      .completion-view { max-width: 500px; margin: 0 auto; text-align: center; }

      .completion-header {
        padding: 40px 0 24px;
      }

      .completion-icon { font-size: 72px; margin-bottom: 12px; }

      .completion-header h2 {
        font-size: 22px;
        margin-bottom: 12px;
      }

      .xp-earned {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: var(--warning-light);
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 16px;
        font-weight: 700;
        color: #9a6700;
      }

      .achievements-section {
        margin: 24px 0;
        text-align: ${LANG === 'ar' ? 'right' : 'left'};
      }

      .achievements-section h3 {
        font-size: 16px;
        margin-bottom: 12px;
      }

      .achievement-card {
        display: flex;
        align-items: center;
        gap: 12px;
        background: linear-gradient(135deg, #fef3c7, #fde68a);
        border: 1px solid #f0d060;
        border-radius: var(--radius-sm);
        padding: 14px;
        margin-bottom: 8px;
      }

      .achievement-icon { font-size: 32px; }
      .achievement-info h4 { font-size: 15px; }
      .achievement-info p { font-size: 12px; color: var(--text-secondary); }

      .completion-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        margin: 24px 0;
      }

      .stat-card {
        background: var(--card-bg);
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        padding: 16px 8px;
      }

      .stat-number {
        font-size: 24px;
        font-weight: 800;
        color: var(--primary);
      }

      .stat-name {
        font-size: 12px;
        color: var(--text-secondary);
        margin-top: 4px;
      }

      .completion-actions {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
      }

      /* ─── Settings ─── */
      .settings-view { max-width: 600px; margin: 0 auto; }

      .settings-section {
        background: var(--card-bg);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 20px;
        margin-bottom: 16px;
      }

      .settings-section h3 {
        font-size: 16px;
        margin-bottom: 14px;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--border);
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }

      .stat-item {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        font-size: 14px;
      }

      .stat-item .stat-label { color: var(--text-secondary); }
      .stat-item .stat-value { font-weight: 700; }

      .settings-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .achievements-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .achievement-tag {
        background: var(--warning-light);
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 13px;
      }

      .import-dialog {
        margin-top: 16px;
        padding: 16px;
        background: var(--bg);
        border-radius: var(--radius-sm);
      }

      .import-dialog h4 { margin-bottom: 10px; font-size: 14px; }

      .import-dialog textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        font-family: monospace;
        font-size: 12px;
        resize: vertical;
        direction: ltr;
      }

      .dialog-actions {
        display: flex;
        gap: 8px;
        margin-top: 10px;
      }

      /* ─── Confirm Dialog ─── */
      .confirm-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 16px;
      }

      .confirm-dialog {
        background: var(--card-bg);
        border-radius: var(--radius);
        padding: 24px;
        max-width: 400px;
        width: 100%;
        text-align: center;
      }

      .confirm-dialog h3 { font-size: 18px; margin-bottom: 10px; }
      .confirm-dialog p { font-size: 14px; color: var(--text-secondary); margin-bottom: 20px; }

      .confirm-dialog .dialog-actions {
        justify-content: center;
      }

      /* ─── Error View ─── */
      .error-view {
        text-align: center;
        padding: 60px 20px;
      }

      .error-icon { font-size: 64px; margin-bottom: 16px; }

      .error-view h2 {
        font-size: 20px;
        margin-bottom: 10px;
      }

      .error-view p {
        color: var(--text-secondary);
        font-size: 14px;
        margin-bottom: 20px;
      }

      .error-view code {
        background: var(--bg);
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 13px;
        direction: ltr;
      }

      /* ─── Toasts ─── */
      .xp-toast {
        position: fixed;
        top: 70px;
        left: 50%;
        transform: translateX(-50%) translateY(-20px);
        background: linear-gradient(135deg, #f59e0b, #d97706);
        color: white;
        padding: 8px 20px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 700;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 200;
        pointer-events: none;
      }

      .xp-toast.show {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }

      .toast {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        padding: 12px 24px;
        border-radius: var(--radius-sm);
        font-size: 14px;
        font-weight: 600;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 200;
        white-space: nowrap;
      }

      .toast.show {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }

      .toast-success { background: var(--success); color: white; }
      .toast-error { background: var(--danger); color: white; }
      .toast-info { background: var(--text); color: white; }

      /* ─── Streak Celebration ─── */
      .streak-celebration {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s;
      }

      .streak-celebration-content {
        background: var(--card-bg);
        border-radius: var(--radius);
        padding: 40px;
        text-align: center;
      }

      .streak-fire-big { font-size: 72px; margin-bottom: 12px; }

      .streak-celebration h2 {
        font-size: 24px;
        margin-bottom: 8px;
      }

      .streak-celebration p {
        color: var(--text-secondary);
        margin-bottom: 20px;
      }

      .streak-celebration button {
        padding: 10px 24px;
        background: var(--primary);
        color: white;
        border: none;
        border-radius: var(--radius-sm);
        font-size: 14px;
        cursor: pointer;
        font-family: var(--font);
      }

      /* ─── Confetti ─── */
      .confetti-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 999;
        overflow: hidden;
      }

      .confetti-piece {
        position: absolute;
        top: -10px;
        left: var(--x);
        width: 10px;
        height: 10px;
        border-radius: 2px;
        animation: confettiFall var(--duration) var(--delay) ease-out forwards;
      }

      @keyframes confettiFall {
        0% {
          transform: translateY(0) rotate(0);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(var(--rotation));
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      /* ─── Responsive ─── */
      @media (max-width: 600px) {
        .app-header {
          padding: 10px 12px;
          gap: 8px;
        }

        .header-title { display: none; }

        .header-stat {
          padding: 3px 6px;
          font-size: 12px;
        }

        .stat-label { display: none; }

        .app-main { padding: 16px 12px; }

        .section-header h2 { font-size: 20px; }

        .phase-card { padding: 12px; gap: 12px; }
        .phase-icon { width: 44px; height: 44px; font-size: 28px; }
        .phase-title { font-size: 15px; }

        .concept-content { padding: 16px; }
        .concept-main-title { font-size: 19px; }

        .quiz-question { padding: 16px; }
        .quiz-question h3 { font-size: 16px; }

        .paywall-card { padding: 24px 16px; }

        .completion-stats { grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .stat-number { font-size: 20px; }

        .stats-grid { grid-template-columns: 1fr; }

        .concept-nav-bottom {
          flex-direction: column;
        }

        .concept-nav-bottom .btn { width: 100%; }
      }

      @media (max-width: 360px) {
        .header-center { display: none; }
        .xp-display .stat-value { font-size: 11px; }
      }

      /* ─── Focus / Accessibility ─── */
      :focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
      }

      button:focus:not(:focus-visible),
      a:focus:not(:focus-visible) {
        outline: none;
      }

      /* ─── Print ─── */
      @media print {
        .app-header, .concept-actions, .concept-nav-bottom, .concept-nav-top .back-btn { display: none; }
        .concept-content { border: none; box-shadow: none; }
      }
    `;

    document.head.appendChild(style);
  }

  // ─── App Initialization ──────────────────────────────────────────────────────

  function init() {
    injectStyles();
    updateStreak();

    const appEl = document.getElementById('app');
    if (!appEl) {
      console.error(T.appMissing);
      return;
    }

    function render() {
      const content = renderCurrentRoute();
      appEl.innerHTML = renderHeader() + `<main class="app-main">${content}</main>`;
    }

    window.addEventListener('hashchange', render);
    document.addEventListener('keydown', handleKeyboard);

    render();
  }

  // ─── Public API ──────────────────────────────────────────────────────────────

  window.App = {
    navigate,
    completeConcept,
    answerQuiz,
    nextQuestion,
    verifyCode,
    verifySettingsCode,
    exportData,
    showImportDialog,
    importData,
    confirmReset,
    doReset,
    sequenceNext: sequenceNext,
    sequencePrev: sequencePrev,
  };

  // ─── Boot ────────────────────────────────────────────────────────────────────

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
