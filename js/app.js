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

  // ─── Phase Quiz Aggregation ──────────────────────────────────────────────────

  function getPhaseQuizzes(phase) {
    const quizzes = [];
    for (const concept of (phase.concepts || [])) {
      if (concept.quiz && concept.quiz.length > 0) {
        for (const q of concept.quiz) {
          quizzes.push(q);
        }
      }
    }
    return quizzes;
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
              ${getPhaseQuizzes(phase).length > 0 ? `<span class="quiz-badge">${T.quiz}</span>` : ''}
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

    const phaseQuizzes = getPhaseQuizzes(phase);
    const hasQuiz = phaseQuizzes.length > 0;
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
              <p>${phaseQuizzes.length} ${T.questions}</p>
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
    if (concept.fen || concept.position) {
      const boardId = `board-${phaseIndex}-${conceptIndex}`;
      boardHTML = `
        <div class="concept-board-wrapper">
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
      const cm = concept.commonMistake;
      const cmTitle = typeof cm === 'object' ? (cm.title || T.commonMistake) : T.commonMistake;
      const cmText = typeof cm === 'object' ? cm.text : cm;
      mistakeHTML = `
        <div class="box box--mistake">
          <div class="box-title">${cmTitle}</div>
          <p>${cmText}</p>
        </div>
      `;
    }

    let analogyHTML = '';
    if (concept.analogy) {
      const an = concept.analogy;
      const anTitle = typeof an === 'object' ? (an.title || T.analogy) : T.analogy;
      const anText = typeof an === 'object' ? an.text : an;
      analogyHTML = `
        <div class="box box--analogy">
          <div class="box-title">${anTitle}</div>
          <p>${anText}</p>
        </div>
      `;
    }

    let practiceHTML = '';
    if (concept.practice) {
      const pr = concept.practice;
      const prTitle = typeof pr === 'object' ? (pr.title || T.practice) : T.practice;
      const prText = typeof pr === 'object' ? pr.text : pr;
      practiceHTML = `
        <div class="box box--practice">
          <div class="box-title">${prTitle}</div>
          <p>${prText}</p>
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

    // Normalize highlights: data may have string[] or {square,color}[]
    const rawHighlights = concept.highlights || [];
    const highlights = rawHighlights.map(h =>
      typeof h === 'string' ? { square: h, color: 'green' } : h
    );

    // Normalize arrows
    const arrows = (concept.arrows || []).map(a =>
      typeof a === 'string' ? { from: a.slice(0, 2), to: a.slice(2, 4), color: 'green' } : a
    );

    try {
      new ChessBoard(boardId, {
        fen: concept.fen || concept.position,
        highlights,
        arrows,
      });
    } catch (err) {
      console.error('ChessBoard init error:', err);
    }
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
    const phaseQuizzes = getPhaseQuizzes(phase);
    if (phaseQuizzes.length === 0) {
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
      questions: [...phaseQuizzes],
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

  function injectStyles() { /* styles in css/app.css */ }

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
