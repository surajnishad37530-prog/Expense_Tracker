/**
 * ApexFlow Finance - Vanilla JavaScript Core Application
 * Clean, Simple, Solid-Color Architecture (No Frameworks, No Gradients, No Animations)
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. Data Definitions & Static Constants
  // ==========================================================================

  const CATEGORIES = [
    // Expense Categories
    { id: 'food', name: 'Food & Dining', type: 'expense', icon: 'Utensils', solidColor: '#f97316' },
    { id: 'shopping', name: 'Shopping & Retail', type: 'expense', icon: 'ShoppingBag', solidColor: '#f43f5e' },
    { id: 'housing', name: 'Housing & Rent', type: 'expense', icon: 'Home', solidColor: '#6366f1' },
    { id: 'transport', name: 'Transport & Fuel', type: 'expense', icon: 'Car', solidColor: '#0284c7' },
    { id: 'entertainment', name: 'Entertainment', type: 'expense', icon: 'Film', solidColor: '#a855f7' },
    { id: 'health', name: 'Healthcare & Fitness', type: 'expense', icon: 'HeartPulse', solidColor: '#10b981' },
    { id: 'utilities', name: 'Bills & Utilities', type: 'expense', icon: 'Zap', solidColor: '#eab308' },
    { id: 'subscriptions', name: 'Digital Subscriptions', type: 'expense', icon: 'Tv', solidColor: '#8b5cf6' },
    { id: 'other_expense', name: 'Miscellaneous', type: 'expense', icon: 'Layers', solidColor: '#64748b' },

    // Income Categories
    { id: 'salary', name: 'Salary & Compensation', type: 'income', icon: 'Briefcase', solidColor: '#10b981' },
    { id: 'freelance', name: 'Freelance & Consulting', type: 'income', icon: 'Laptop', solidColor: '#0284c7' },
    { id: 'investments', name: 'Investments & Dividends', type: 'income', icon: 'TrendingUp', solidColor: '#6366f1' },
    { id: 'gifts', name: 'Gifts & Grants', type: 'income', icon: 'Gift', solidColor: '#f43f5e' },
    { id: 'other_income', name: 'Other Income', type: 'income', icon: 'Wallet', solidColor: '#0d9488' }
  ];

  const PAYMENT_METHODS = [
    { id: 'credit_card', name: 'Credit Card', icon: 'CreditCard' },
    { id: 'debit_card', name: 'Debit Card', icon: 'CreditCard' },
    { id: 'digital_wallet', name: 'Digital Wallet / UPI', icon: 'Smartphone' },
    { id: 'bank_transfer', name: 'Bank Transfer', icon: 'Building' },
    { id: 'cash', name: 'Cash in Hand', icon: 'Banknote' }
  ];

  const CURRENCIES = [
    { code: 'INR', symbol: '₹', name: 'Indian Rupee', rate: 83.5 },
    { code: 'USD', symbol: '$', name: 'US Dollar', rate: 1.0 },
    { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.92 },
    { code: 'GBP', symbol: '£', name: 'British Pound', rate: 0.78 },
    { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar', rate: 1.36 },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', rate: 1.52 },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen', rate: 155.0 }
  ];

  // Helper to format ISO date string offset by days
  const getRelativeDate = (offsetDays = 0) => {
    const d = new Date();
    d.setDate(d.getDate() - offsetDays);
    return d.toISOString().split('T')[0];
  };

  const INITIAL_TRANSACTIONS = [
    {
      id: 'tx-1',
      title: 'Monthly Tech Salary',
      amount: 5400,
      type: 'income',
      category: 'salary',
      date: getRelativeDate(1),
      paymentMethod: 'bank_transfer',
      notes: 'Direct deposit for Senior Frontend Engineering',
      createdAt: Date.now() - 86400000 * 1
    },
    {
      id: 'tx-2',
      title: 'Modern Apartment Rent',
      amount: 1450,
      type: 'expense',
      category: 'housing',
      date: getRelativeDate(2),
      paymentMethod: 'bank_transfer',
      notes: 'Monthly loft rental & maintenance fee',
      createdAt: Date.now() - 86400000 * 2
    },
    {
      id: 'tx-3',
      title: 'Whole Foods Market & Organic Groceries',
      amount: 142.50,
      type: 'expense',
      category: 'food',
      date: getRelativeDate(2),
      paymentMethod: 'credit_card',
      notes: 'Fresh veggies, artisan sourdough, and fruits',
      createdAt: Date.now() - 86400000 * 2 - 3600000
    },
    {
      id: 'tx-4',
      title: 'Freelance UI/UX Dashboard Design',
      amount: 1250,
      type: 'income',
      category: 'freelance',
      date: getRelativeDate(4),
      paymentMethod: 'digital_wallet',
      notes: 'Milestone 2 payment for FinTech SaaS dashboard',
      createdAt: Date.now() - 86400000 * 4
    },
    {
      id: 'tx-5',
      title: 'Apple Store - USB-C Hub & MagSafe Stand',
      amount: 129.99,
      type: 'expense',
      category: 'shopping',
      date: getRelativeDate(5),
      paymentMethod: 'credit_card',
      notes: 'Desk setup upgrade accessories',
      createdAt: Date.now() - 86400000 * 5
    },
    {
      id: 'tx-6',
      title: 'Electric & High-speed Fiber Internet',
      amount: 95.00,
      type: 'expense',
      category: 'utilities',
      date: getRelativeDate(6),
      paymentMethod: 'debit_card',
      notes: '1 Gbps fiber broadband and electricity bill',
      createdAt: Date.now() - 86400000 * 6
    },
    {
      id: 'tx-7',
      title: 'Blue Bottle Specialty Coffee & Brunch',
      amount: 38.40,
      type: 'expense',
      category: 'food',
      date: getRelativeDate(7),
      paymentMethod: 'digital_wallet',
      notes: 'Weekend breakfast with team members',
      createdAt: Date.now() - 86400000 * 7
    },
    {
      id: 'tx-8',
      title: 'Quarterly Stock Portfolio Dividend',
      amount: 320.00,
      type: 'income',
      category: 'investments',
      date: getRelativeDate(9),
      paymentMethod: 'bank_transfer',
      notes: 'Vanguard Index ETF distributions',
      createdAt: Date.now() - 86400000 * 9
    },
    {
      id: 'tx-9',
      title: 'Equinox Gym & Pilates Membership',
      amount: 120.00,
      type: 'expense',
      category: 'health',
      date: getRelativeDate(11),
      paymentMethod: 'credit_card',
      notes: 'Monthly premium fitness club pass',
      createdAt: Date.now() - 86400000 * 11
    },
    {
      id: 'tx-10',
      title: 'Shell Fuel & Highway Tolls',
      amount: 68.20,
      type: 'expense',
      category: 'transport',
      date: getRelativeDate(13),
      paymentMethod: 'credit_card',
      notes: 'Weekend road trip tank refill',
      createdAt: Date.now() - 86400000 * 13
    },
    {
      id: 'tx-11',
      title: 'Netflix 4K & Spotify Family Bundle',
      amount: 28.98,
      type: 'expense',
      category: 'subscriptions',
      date: getRelativeDate(14),
      paymentMethod: 'credit_card',
      notes: 'Monthly recurring entertainment subscriptions',
      createdAt: Date.now() - 86400000 * 14
    },
    {
      id: 'tx-12',
      title: 'IMAX Cinema & Gourmet Popcorn',
      amount: 52.00,
      type: 'expense',
      category: 'entertainment',
      date: getRelativeDate(16),
      paymentMethod: 'digital_wallet',
      notes: 'Sci-fi movie premiere tickets for 2',
      createdAt: Date.now() - 86400000 * 16
    }
  ];

  const INITIAL_BUDGET = {
    monthlyLimit: 3200,
    categoryLimits: {
      housing: 1500,
      food: 500,
      shopping: 300,
      transport: 200,
      entertainment: 200,
      health: 150,
      utilities: 150,
      subscriptions: 50,
      other_expense: 150
    }
  };

  // ==========================================================================
  // 2. Crisp Vector Icons (Lucide Clean SVGs)
  // ==========================================================================
  const ICONS = {
    Sparkles: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
    Sun: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
    Moon: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
    Plus: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
    Coins: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>',
    Layers: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>',
    RotateCcw: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',
    Download: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
    Trash2: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>',
    ChevronDown: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    ChevronUp: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
    Menu: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
    X: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    Wallet: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>',
    TrendingUp: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
    TrendingDown: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>',
    Percent: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="5" y1="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>',
    ArrowUpRight: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>',
    ArrowDownRight: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m7 7 10 10"/><path d="M17 7v10H7"/></svg>',
    ShieldCheck: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
    Zap: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    AlertTriangle: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>',
    AlertCircle: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>',
    CheckCircle2: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    Check: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    Search: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    Filter: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
    ArrowUpDown: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>',
    Calendar: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
    CreditCard: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',
    Edit3: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
    FileQuestion: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><circle cx="12" cy="18" r="1"/><path d="M9.09 13a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/></svg>',
    FileText: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>',
    Target: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    Settings2: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>',
    PieChart: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>',
    BarChart3: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
    Info: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>',

    // Category Specific Lucide Icons
    Utensils: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2v20M2 2v10a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V2M7 2v6M11 2v6M3 2v6"/></svg>',
    ShoppingBag: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    Home: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    Car: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',
    Film: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18"/><line x1="7" x2="7" y1="2" y2="22"/><line x1="17" x2="17" y1="2" y2="22"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="2" x2="7" y1="7" y2="7"/><line x1="2" x2="7" y1="17" y2="17"/><line x1="17" x2="22" y1="17" y2="17"/><line x1="17" x2="22" y1="7" y2="7"/></svg>',
    HeartPulse: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>',
    Tv: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>',
    Briefcase: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    Laptop: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>',
    Gift: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect width="20" height="5" x="2" y="7" rx="1"/><line x1="12" x2="12" y1="22" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
    Smartphone: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>',
    Building: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>',
    Banknote: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>',
    HelpCircle: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>'
  };

  const renderIcon = (name) => {
    return ICONS[name] || ICONS.HelpCircle;
  };

  // ==========================================================================
  // 3. Application State & Storage Sync
  // ==========================================================================

  const state = {
    transactions: [],
    budget: INITIAL_BUDGET,
    currency: CURRENCIES[0],
    theme: 'dark',
    filter: {
      search: '',
      type: 'all',
      category: 'all',
      dateRange: 'all',
      sortBy: 'date_desc'
    },
    chartTimeframe: 'all',
    selectedDonutCategory: null,
    editingTxId: null,
    modalType: 'expense',
    selectedModalCategory: 'food'
  };

  // Initialize State from LocalStorage
  const initState = () => {
    // 1. Transactions
    try {
      const savedTx = localStorage.getItem('apex_transactions');
      state.transactions = savedTx ? JSON.parse(savedTx) : INITIAL_TRANSACTIONS;
    } catch {
      state.transactions = INITIAL_TRANSACTIONS;
    }

    // 2. Budget
    try {
      const savedBudget = localStorage.getItem('apex_budget');
      state.budget = savedBudget ? JSON.parse(savedBudget) : INITIAL_BUDGET;
    } catch {
      state.budget = INITIAL_BUDGET;
    }

    // 3. Currency (Default INR)
    try {
      const savedCode = localStorage.getItem('apex_currency_code') || 'INR';
      state.currency = CURRENCIES.find((c) => c.code === savedCode) || CURRENCIES[0];
    } catch {
      state.currency = CURRENCIES[0];
    }

    // 4. Theme (Default Dark)
    try {
      const savedTheme = localStorage.getItem('apex_theme_user_choice') || 'dark';
      state.theme = savedTheme;
    } catch {
      state.theme = 'dark';
    }
    applyTheme(state.theme);
  };

  const saveTransactions = () => {
    try {
      localStorage.setItem('apex_transactions', JSON.stringify(state.transactions));
    } catch (e) {
      console.error('Error saving transactions', e);
    }
  };

  const saveBudget = () => {
    try {
      localStorage.setItem('apex_budget', JSON.stringify(state.budget));
    } catch (e) {
      console.error('Error saving budget', e);
    }
  };

  const applyTheme = (theme) => {
    state.theme = theme;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('apex_theme_user_choice', theme);

    // Update Theme Toggle Button Icon
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? renderIcon('Sun') : renderIcon('Moon');
      themeBtn.title = `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`;
    }
  };

  // ==========================================================================
  // 4. Formatter & Calculation Utilities
  // ==========================================================================

  const getCategoryById = (categoryId) => {
    return CATEGORIES.find((c) => c.id === categoryId) || {
      id: categoryId,
      name: 'General',
      type: 'expense',
      icon: 'Layers',
      solidColor: '#64748b'
    };
  };

  const formatCurrency = (amount, currency = state.currency) => {
    const rate = currency.rate || 1;
    const converted = amount * rate;
    return `${currency.symbol}${converted.toLocaleString(
      currency.code === 'INR' ? 'en-IN' : undefined,
      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    )}`;
  };

  const formatDate = (dateStr) => {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    if (dateStr === todayStr) return 'Today';
    if (dateStr === yesterdayStr) return 'Yesterday';

    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== today.getFullYear() ? 'numeric' : undefined
    });
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Date', 'Type', 'Category', 'Title', 'Amount', 'Payment Method', 'Notes'];
    const rate = state.currency.rate || 1;

    const rows = state.transactions.map((tx) => [
      `"${tx.id}"`,
      `"${tx.date}"`,
      `"${tx.type.toUpperCase()}"`,
      `"${getCategoryById(tx.category).name}"`,
      `"${tx.title.replace(/"/g, '""')}"`,
      `${(tx.amount * rate).toFixed(2)}`,
      `"${tx.paymentMethod}"`,
      `"${(tx.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const fileName = `expense_tracker_export_${new Date().toISOString().split('T')[0]}.csv`;

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      if (link.parentNode) link.parentNode.removeChild(link);
      URL.revokeObjectURL(url);
    }, 150);

    addToast('CSV Downloaded', `Successfully exported ${state.transactions.length} records.`, 'success');
  };

  // ==========================================================================
  // 5. Toast Feedback Alerts
  // ==========================================================================

  const addToast = (title, description = '', type = 'info') => {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let iconName = 'Info';
    if (type === 'success') iconName = 'CheckCircle2';
    if (type === 'warning') iconName = 'AlertTriangle';

    toast.innerHTML = `
      <div style="flex-shrink:0;">${renderIcon(iconName)}</div>
      <div class="toast-body">
        <div class="toast-title">${title}</div>
        ${description ? `<div class="toast-desc">${description}</div>` : ''}
      </div>
      <button class="toast-close" aria-label="Close">${renderIcon('X')}</button>
    `;

    toast.querySelector('.toast-close').addEventListener('click', () => {
      toast.remove();
    });

    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentElement) toast.remove();
    }, 4000);
  };

  // ==========================================================================
  // 6. UI Render Functions
  // ==========================================================================

  // Greeting & Date Banner
  const renderHeroGreeting = () => {
    const greetingEl = document.getElementById('hero-greeting-text');
    const dateEl = document.getElementById('hero-date-text');

    const hour = new Date().getHours();
    let greeting = 'Good evening';
    if (hour < 12) greeting = 'Good morning';
    else if (hour < 18) greeting = 'Good afternoon';

    if (greetingEl) {
      greetingEl.innerHTML = `${greeting}, <span class="hero-title-accent">Financial Explorer</span>`;
    }

    if (dateEl) {
      dateEl.textContent = new Date().toLocaleDateString(undefined, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    }
  };

  // Currency Dropdown & Active Selectors
  const renderCurrencySelectors = () => {
    const desktopSymbol = document.getElementById('active-currency-symbol');
    const desktopCode = document.getElementById('active-currency-code');
    const mobileActiveLabel = document.getElementById('mobile-currency-active-label');

    if (desktopSymbol) desktopSymbol.textContent = state.currency.symbol;
    if (desktopCode) desktopCode.textContent = state.currency.code;
    if (mobileActiveLabel) {
      mobileActiveLabel.textContent = `Active: ${state.currency.code} (${state.currency.symbol})`;
    }

    // Render Desktop Dropdown Items
    const desktopList = document.getElementById('desktop-currency-list');
    if (desktopList) {
      desktopList.innerHTML = CURRENCIES.map(
        (curr) => `
        <button class="dropdown-item ${curr.code === state.currency.code ? 'active' : ''}" data-code="${curr.code}">
          <span><strong>${curr.symbol}</strong> ${curr.code}</span>
          <span style="font-size:11px;color:var(--text-muted);">${curr.name}</span>
        </button>
      `
      ).join('');

      desktopList.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => {
          const code = btn.getAttribute('data-code');
          const chosen = CURRENCIES.find((c) => c.code === code);
          if (chosen) setCurrency(chosen);
          closeAllDropdowns();
        });
      });
    }

    // Render Mobile Grid Buttons
    const mobileGrid = document.getElementById('mobile-currency-grid');
    if (mobileGrid) {
      mobileGrid.innerHTML = CURRENCIES.map(
        (curr) => `
        <button class="mobile-currency-btn ${curr.code === state.currency.code ? 'active' : ''}" data-code="${curr.code}">
          ${curr.symbol} ${curr.code}
        </button>
      `
      ).join('');

      mobileGrid.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => {
          const code = btn.getAttribute('data-code');
          const chosen = CURRENCIES.find((c) => c.code === code);
          if (chosen) setCurrency(chosen);
        });
      });
    }
  };

  // Dashboard Stats Calculations & Display
  const renderDashboardStats = () => {
    let totalIncome = 0;
    let totalExpenses = 0;

    const now = new Date();
    const curYear = now.getFullYear();
    const curMonth = now.getMonth();
    let budgetSpent = 0;

    state.transactions.forEach((tx) => {
      if (tx.type === 'income') {
        totalIncome += tx.amount;
      } else if (tx.type === 'expense') {
        totalExpenses += tx.amount;
        const [y, m] = tx.date.split('-').map(Number);
        if (y === curYear && m === curMonth + 1) {
          budgetSpent += tx.amount;
        }
      }
    });

    const netBalance = totalIncome - totalExpenses;
    const isSurplus = netBalance >= 0;

    let savingsRate = 0;
    if (totalIncome > 0) {
      savingsRate = Math.max(-100, Math.min(100, Math.round(((totalIncome - totalExpenses) / totalIncome) * 100)));
    }

    const monthlyLimit = state.budget.monthlyLimit || 1;
    const budgetPercentage = Math.min(200, Math.round((budgetSpent / monthlyLimit) * 100));
    const isBudgetExceeded = budgetPercentage >= 100;
    const isBudgetWarning = budgetPercentage > 85;

    // 1. Total Balance
    const balanceValEl = document.getElementById('stat-balance-value');
    const balanceBadgeEl = document.getElementById('stat-balance-badge');
    if (balanceValEl) balanceValEl.textContent = formatCurrency(netBalance);
    if (balanceBadgeEl) {
      balanceBadgeEl.className = `pill-tag ${isSurplus ? 'income' : 'expense'}`;
      balanceBadgeEl.innerHTML = `${isSurplus ? renderIcon('ArrowUpRight') : renderIcon('ArrowDownRight')} ${
        isSurplus ? 'Surplus' : 'Deficit'
      }`;
    }

    // 2. Total Income
    const incomeValEl = document.getElementById('stat-income-value');
    if (incomeValEl) incomeValEl.textContent = `+${formatCurrency(totalIncome)}`;

    // 3. Total Expenses
    const expenseValEl = document.getElementById('stat-expense-value');
    if (expenseValEl) expenseValEl.textContent = `-${formatCurrency(totalExpenses)}`;

    // 4. Budget Meter
    const budgetPctEl = document.getElementById('stat-budget-percent');
    const budgetSpentEl = document.getElementById('stat-budget-spent-text');
    const budgetBarFillEl = document.getElementById('stat-budget-bar-fill');
    const savingsRateEl = document.getElementById('stat-savings-rate-value');
    const budgetStatusTagEl = document.getElementById('stat-budget-status-tag');

    if (budgetPctEl) budgetPctEl.textContent = `${budgetPercentage}%`;
    if (budgetSpentEl) {
      budgetSpentEl.textContent = `${formatCurrency(budgetSpent)} / ${formatCurrency(monthlyLimit)}`;
    }
    if (budgetBarFillEl) {
      budgetBarFillEl.style.width = `${Math.min(100, budgetPercentage)}%`;
      budgetBarFillEl.style.backgroundColor = isBudgetExceeded
        ? 'var(--expense)'
        : isBudgetWarning
        ? 'var(--warning)'
        : 'var(--income)';
    }
    if (savingsRateEl) savingsRateEl.textContent = `${savingsRate}%`;
    if (budgetStatusTagEl) {
      if (isBudgetExceeded) {
        budgetStatusTagEl.className = 'pill-tag expense';
        budgetStatusTagEl.innerHTML = `${renderIcon('AlertTriangle')} Over Limit`;
      } else if (isBudgetWarning) {
        budgetStatusTagEl.className = 'pill-tag warning';
        budgetStatusTagEl.innerHTML = `${renderIcon('AlertTriangle')} High Usage`;
      } else {
        budgetStatusTagEl.className = 'pill-tag income';
        budgetStatusTagEl.innerHTML = `${renderIcon('ShieldCheck')} On Target`;
      }
    }
  };

  // Spending Breakdown Donut Chart
  const renderDonutChart = () => {
    const donutSvg = document.getElementById('donut-svg');
    const legendList = document.getElementById('donut-legend-list');
    const centerAmount = document.getElementById('donut-center-amount');
    const centerLabel = document.getElementById('donut-center-label');
    const centerMeta = document.getElementById('donut-center-meta');
    const highestSummary = document.getElementById('donut-highest-summary');

    // Filter transactions for Donut chart
    let expenseTx = state.transactions.filter((tx) => tx.type === 'expense');
    if (state.chartTimeframe === 'this_month') {
      const now = new Date();
      const cy = now.getFullYear();
      const cm = now.getMonth();
      expenseTx = expenseTx.filter((tx) => {
        const [y, m] = tx.date.split('-').map(Number);
        return y === cy && m === cm + 1;
      });
    }

    const totalSpent = expenseTx.reduce((sum, tx) => sum + tx.amount, 0);

    const map = new Map();
    expenseTx.forEach((tx) => {
      map.set(tx.category, (map.get(tx.category) || 0) + tx.amount);
    });

    const items = Array.from(map.entries())
      .map(([catId, amount]) => {
        const cat = getCategoryById(catId);
        const percent = totalSpent > 0 ? (amount / totalSpent) * 100 : 0;
        return {
          id: catId,
          name: cat.name,
          amount,
          percent,
          color: cat.solidColor
        };
      })
      .sort((a, b) => b.amount - a.amount);

    if (items.length === 0) {
      if (donutSvg) {
        donutSvg.innerHTML = `
          <circle cx="100" cy="100" r="70" fill="transparent" stroke="var(--border-color)" stroke-width="24" />
        `;
      }
      if (centerAmount) centerAmount.textContent = formatCurrency(0);
      if (centerLabel) centerLabel.textContent = 'Total Spent';
      if (centerMeta) centerMeta.textContent = '0 categories';
      if (legendList) {
        legendList.innerHTML = `<div style="text-align:center;padding:24px 0;font-size:12px;color:var(--text-muted);">No expenses recorded for this period.</div>`;
      }
      if (highestSummary) highestSummary.textContent = 'N/A';
      return;
    }

    // Calculate SVG Stroke Offsets
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    let accumulatedAngle = 0;

    let svgCircles = `
      <circle cx="100" cy="100" r="70" fill="transparent" stroke="var(--bg-surface-subtle)" stroke-width="24" />
    `;

    items.forEach((item, index) => {
      const strokeDashoffset = -circumference * (accumulatedAngle / 360);
      const strokeDasharray = `${(item.percent / 100) * circumference} ${circumference}`;
      accumulatedAngle += (item.percent / 100) * 360;

      svgCircles += `
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="transparent"
          stroke="${item.color}"
          stroke-width="24"
          stroke-dasharray="${strokeDasharray}"
          stroke-dashoffset="${strokeDashoffset}"
          stroke-linecap="butt"
          style="cursor: pointer;"
          data-index="${index}"
        />
      `;
    });

    if (donutSvg) donutSvg.innerHTML = svgCircles;

    // Render Legend
    if (legendList) {
      legendList.innerHTML = items
        .map(
          (item, index) => `
        <div class="donut-legend-item ${state.selectedDonutCategory === item.id ? 'active' : ''}" data-index="${index}">
          <div class="donut-legend-left">
            <div class="donut-dot" style="background-color: ${item.color};"></div>
            <span>${item.name}</span>
          </div>
          <div class="donut-legend-right">
            <span class="donut-legend-amount">${formatCurrency(item.amount)}</span>
            <span class="donut-legend-percent">${item.percent.toFixed(0)}%</span>
          </div>
        </div>
      `
        )
        .join('');

      // Click listener for legend items
      legendList.querySelectorAll('.donut-legend-item').forEach((row) => {
        row.addEventListener('click', () => {
          const idx = parseInt(row.getAttribute('data-index'), 10);
          selectDonutSlice(items[idx], items);
        });
      });
    }

    // Click listener for SVG circle segments
    if (donutSvg) {
      donutSvg.querySelectorAll('circle[data-index]').forEach((circle) => {
        circle.addEventListener('click', () => {
          const idx = parseInt(circle.getAttribute('data-index'), 10);
          selectDonutSlice(items[idx], items);
        });
      });
    }

    // Default center display
    if (centerLabel) centerLabel.textContent = 'Total Spent';
    if (centerAmount) centerAmount.textContent = formatCurrency(totalSpent);
    if (centerMeta) centerMeta.textContent = `${items.length} categories`;
    if (highestSummary) {
      highestSummary.textContent = `${items[0].name} (${items[0].percent.toFixed(0)}%)`;
    }
  };

  const selectDonutSlice = (item, allItems) => {
    const centerAmount = document.getElementById('donut-center-amount');
    const centerLabel = document.getElementById('donut-center-label');
    const centerMeta = document.getElementById('donut-center-meta');

    if (!item) {
      const totalSpent = allItems.reduce((s, i) => s + i.amount, 0);
      if (centerLabel) centerLabel.textContent = 'Total Spent';
      if (centerAmount) centerAmount.textContent = formatCurrency(totalSpent);
      if (centerMeta) centerMeta.textContent = `${allItems.length} categories`;
      return;
    }

    state.selectedDonutCategory = item.id;
    if (centerLabel) centerLabel.textContent = item.name;
    if (centerAmount) centerAmount.textContent = formatCurrency(item.amount);
    if (centerMeta) centerMeta.textContent = `${item.percent.toFixed(1)}% of expenses`;

    // Highlight active in legend
    const legendList = document.getElementById('donut-legend-list');
    if (legendList) {
      legendList.querySelectorAll('.donut-legend-item').forEach((el) => {
        el.classList.remove('active');
      });
      const activeEl = legendList.querySelector(`[data-index="${allItems.indexOf(item)}"]`);
      if (activeEl) activeEl.classList.add('active');
    }
  };

  // Cash Flow Activity Bar Chart
  const renderCashflowChart = () => {
    const chartContainer = document.getElementById('bar-chart-body');
    if (!chartContainer) return;

    const months = [];
    const now = new Date();

    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const year = d.getFullYear();
      const month = d.getMonth();
      const monthLabel = d.toLocaleString(undefined, { month: 'short' });

      let income = 0;
      let expense = 0;

      state.transactions.forEach((tx) => {
        const [y, m] = tx.date.split('-').map(Number);
        if (y === year && m === month + 1) {
          if (tx.type === 'income') income += tx.amount;
          if (tx.type === 'expense') expense += tx.amount;
        }
      });

      months.push({ label: monthLabel, income, expense });
    }

    const maxVal = Math.max(...months.map((m) => Math.max(m.income, m.expense)), 1000) * 1.15;

    chartContainer.innerHTML = months
      .map((month) => {
        const incomeHeight = maxVal > 0 ? (month.income / maxVal) * 100 : 0;
        const expenseHeight = maxVal > 0 ? (month.expense / maxVal) * 100 : 0;

        return `
        <div class="bar-group" data-label="${month.label}">
          <div class="bar-tooltip">
            +${formatCurrency(month.income)} / -${formatCurrency(month.expense)}
          </div>
          <div class="bar-pair">
            <div class="bar-income" style="height: ${Math.max(6, incomeHeight)}%;" title="Income: ${formatCurrency(month.income)}"></div>
            <div class="bar-expense" style="height: ${Math.max(6, expenseHeight)}%;" title="Expense: ${formatCurrency(month.expense)}"></div>
          </div>
          <span class="bar-month-label">${month.label}</span>
        </div>
      `;
      })
      .join('');

    // Click/touch group to toggle tooltip
    chartContainer.querySelectorAll('.bar-group').forEach((grp) => {
      grp.addEventListener('click', () => {
        const isCurrentActive = grp.classList.contains('active');
        chartContainer.querySelectorAll('.bar-group').forEach((g) => g.classList.remove('active'));
        if (!isCurrentActive) grp.classList.add('active');
      });
    });
  };

  // Budget Goals Section
  const renderBudgetGoals = () => {
    const grid = document.getElementById('budget-category-grid');
    const remainingEl = document.getElementById('budget-remaining-text');
    if (!grid) return;

    const now = new Date();
    const curYear = now.getFullYear();
    const curMonth = now.getMonth();

    const spending = {};
    let totalSpentThisMonth = 0;

    state.transactions.forEach((tx) => {
      if (tx.type !== 'expense') return;
      const [y, m] = tx.date.split('-').map(Number);
      if (y === curYear && m === curMonth + 1) {
        spending[tx.category] = (spending[tx.category] || 0) + tx.amount;
        totalSpentThisMonth += tx.amount;
      }
    });

    const remainingMonthly = Math.max(0, (state.budget.monthlyLimit || 0) - totalSpentThisMonth);
    if (remainingEl) remainingEl.textContent = formatCurrency(remainingMonthly);

    const budgetedCategories = Object.entries(state.budget.categoryLimits || {})
      .filter(([_, limit]) => limit > 0)
      .map(([catId, limit]) => {
        const spent = spending[catId] || 0;
        const percent = Math.min(200, Math.round((spent / limit) * 100));
        const cat = getCategoryById(catId);
        return {
          catId,
          name: cat.name,
          icon: cat.icon,
          color: cat.solidColor,
          limit,
          spent,
          percent
        };
      })
      .sort((a, b) => b.percent - a.percent);

    if (budgetedCategories.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 24px; font-size: 13px; color: var(--text-muted);">No budget limits set. Click "Adjust Budget Limits" to configure spending goals.</div>`;
      return;
    }

    grid.innerHTML = budgetedCategories
      .map((item) => {
        const isOver = item.percent >= 100;
        const isNear = item.percent >= 80 && item.percent < 100;
        const statusClass = isOver ? 'expense' : isNear ? 'warning' : 'income';
        const barColor = isOver ? 'var(--expense)' : isNear ? 'var(--warning)' : 'var(--income)';
        const iconName = isOver ? 'AlertCircle' : 'CheckCircle2';

        return `
        <div class="budget-card">
          <div class="budget-card-top">
            <div class="budget-cat-info">
              <div class="cat-icon-badge" style="background-color: ${item.color};">
                ${renderIcon(item.icon)}
              </div>
              <span class="budget-cat-name">${item.name}</span>
            </div>
            <span class="pill-tag ${statusClass}">
              ${renderIcon(iconName)} ${item.percent}%
            </span>
          </div>

          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${Math.min(100, item.percent)}%; background-color: ${barColor};"></div>
          </div>

          <div class="budget-card-meta">
            <span>Spent: ${formatCurrency(item.spent)}</span>
            <span>Limit: ${formatCurrency(item.limit)}</span>
          </div>
        </div>
      `;
      })
      .join('');
  };

  // Recent Transactions List
  const renderTransactionsList = () => {
    const listContainer = document.getElementById('transactions-list-container');
    const countBadge = document.getElementById('transactions-count-badge');
    const activeFiltersBanner = document.getElementById('active-filters-banner');
    if (!listContainer) return;

    // Apply Filters
    let list = state.transactions.filter((tx) => {
      // 1. Search Query
      if (state.filter.search.trim()) {
        const q = state.filter.search.toLowerCase();
        const matchTitle = tx.title.toLowerCase().includes(q);
        const matchNotes = tx.notes ? tx.notes.toLowerCase().includes(q) : false;
        if (!matchTitle && !matchNotes) return false;
      }

      // 2. Type Filter
      if (state.filter.type !== 'all' && tx.type !== state.filter.type) {
        return false;
      }

      // 3. Category Filter
      if (state.filter.category !== 'all' && tx.category !== state.filter.category) {
        return false;
      }

      // 4. Date Range
      if (state.filter.dateRange !== 'all') {
        const now = new Date();
        const txDate = new Date(tx.date + 'T00:00:00');

        if (state.filter.dateRange === 'this_week') {
          const oneWeekAgo = new Date();
          oneWeekAgo.setDate(now.getDate() - 7);
          if (txDate < oneWeekAgo || txDate > now) return false;
        } else if (state.filter.dateRange === 'this_month') {
          if (txDate.getFullYear() !== now.getFullYear() || txDate.getMonth() !== now.getMonth()) {
            return false;
          }
        }
      }

      return true;
    });

    // Apply Sorting
    list.sort((a, b) => {
      if (state.filter.sortBy === 'date_desc') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (state.filter.sortBy === 'date_asc') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      if (state.filter.sortBy === 'amount_desc') {
        return b.amount - a.amount;
      }
      if (state.filter.sortBy === 'amount_asc') {
        return a.amount - b.amount;
      }
      return 0;
    });

    if (countBadge) countBadge.textContent = list.length;

    // Active Filter Indicator
    const isFiltered =
      state.filter.search !== '' ||
      state.filter.type !== 'all' ||
      state.filter.category !== 'all' ||
      state.filter.dateRange !== 'all';

    if (activeFiltersBanner) {
      activeFiltersBanner.style.display = isFiltered ? 'flex' : 'none';
    }

    if (list.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon-box">${renderIcon('FileQuestion')}</div>
          <h5>No transactions found</h5>
          <p>${
            isFiltered
              ? 'Try modifying your search or clear active filters to view records.'
              : 'You have not added any transactions yet. Record your first entry.'
          }</p>
          ${
            isFiltered
              ? `<button id="empty-clear-filters-btn" class="btn btn-secondary">Clear Filters</button>`
              : `<button id="empty-add-btn" class="btn btn-primary">${renderIcon('Plus')} Record First Transaction</button>`
          }
        </div>
      `;

      const emptyClearBtn = document.getElementById('empty-clear-filters-btn');
      if (emptyClearBtn) emptyClearBtn.addEventListener('click', resetFilters);

      const emptyAddBtn = document.getElementById('empty-add-btn');
      if (emptyAddBtn) emptyAddBtn.addEventListener('click', () => openTransactionModal());
      return;
    }

    listContainer.innerHTML = list
      .map((tx) => {
        const cat = getCategoryById(tx.category);
        const isIncome = tx.type === 'income';
        const method = PAYMENT_METHODS.find((p) => p.id === tx.paymentMethod);
        const methodName = method ? method.name : tx.paymentMethod;

        return `
        <div class="tx-card" data-id="${tx.id}">
          <div class="tx-card-left">
            <div class="tx-cat-icon" style="background-color: ${cat.solidColor};">
              ${renderIcon(cat.icon)}
            </div>
            <div class="tx-info">
              <div class="tx-title">${escapeHTML(tx.title)}</div>
              <div class="tx-details">
                <span style="font-weight:700;color:var(--text-secondary);">${cat.name}</span>
                <span>•</span>
                <span>${formatDate(tx.date)}</span>
                <span>•</span>
                <span style="display:inline-flex;align-items:center;gap:4px;">
                  ${renderIcon(method ? method.icon : 'CreditCard')} ${methodName}
                </span>
              </div>
              ${tx.notes ? `<div class="tx-notes">"${escapeHTML(tx.notes)}"</div>` : ''}
            </div>
          </div>

          <div class="tx-card-right">
            <span class="tx-amount ${isIncome ? 'income' : 'expense'}">
              ${isIncome ? '+' : '-'}${formatCurrency(tx.amount)}
            </span>
            <div class="tx-actions">
              <button class="tx-btn edit-tx-btn" data-id="${tx.id}" title="Edit Transaction" aria-label="Edit">
                ${renderIcon('Edit3')}
              </button>
              <button class="tx-btn delete delete-tx-btn" data-id="${tx.id}" title="Delete Transaction" aria-label="Delete">
                ${renderIcon('Trash2')}
              </button>
            </div>
          </div>
        </div>
      `;
      })
      .join('');

    // Attach Edit and Delete listeners
    listContainer.querySelectorAll('.edit-tx-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const tx = state.transactions.find((t) => t.id === id);
        if (tx) openTransactionModal(tx);
      });
    });

    listContainer.querySelectorAll('.delete-tx-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        deleteTransaction(id);
      });
    });
  };

  const escapeHTML = (str) => {
    return (str || '').replace(/[&<>'"]/g, (tag) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  };

  // Populate Filter Select Elements
  const initFilterDropdowns = () => {
    const catSelect = document.getElementById('filter-category-select');
    if (catSelect) {
      catSelect.innerHTML = `<option value="all">All Categories</option>` +
        CATEGORIES.map((c) => `<option value="${c.id}">${c.name} (${c.type})</option>`).join('');
    }
  };

  // Master Render Loop
  const renderAll = () => {
    renderHeroGreeting();
    renderCurrencySelectors();
    renderDashboardStats();
    renderDonutChart();
    renderCashflowChart();
    renderBudgetGoals();
    renderTransactionsList();
  };

  // ==========================================================================
  // 7. Data Actions & Handlers
  // ==========================================================================

  const setCurrency = (curr) => {
    state.currency = curr;
    localStorage.setItem('apex_currency_code', curr.code);
    addToast('Currency Changed', `Switched to ${curr.name} (${curr.symbol})`, 'info');
    renderAll();
  };

  const addTransaction = (data) => {
    const newTx = {
      ...data,
      id: 'tx-' + Date.now(),
      createdAt: Date.now()
    };
    state.transactions.unshift(newTx);
    saveTransactions();
    addToast(
      `${data.type === 'income' ? 'Income' : 'Expense'} Recorded`,
      `"${data.title}" added successfully.`,
      'success'
    );
    renderAll();
  };

  const updateTransaction = (id, data) => {
    state.transactions = state.transactions.map((tx) => (tx.id === id ? { ...tx, ...data } : tx));
    saveTransactions();
    addToast('Transaction Updated', 'Changes have been saved.', 'success');
    renderAll();
  };

  const deleteTransaction = (id) => {
    const target = state.transactions.find((tx) => tx.id === id);
    state.transactions = state.transactions.filter((tx) => tx.id !== id);
    saveTransactions();
    addToast('Transaction Removed', target ? `"${target.title}" was deleted.` : '', 'info');
    renderAll();
  };

  const updateBudgetLimits = (newBudget) => {
    state.budget = {
      ...state.budget,
      ...newBudget,
      categoryLimits: {
        ...state.budget.categoryLimits,
        ...(newBudget.categoryLimits || {})
      }
    };
    saveBudget();
    addToast('Budget Updated', 'Monthly spending limits have been adjusted.', 'success');
    renderAll();
  };

  const resetToDemoData = () => {
    state.transactions = JSON.parse(JSON.stringify(INITIAL_TRANSACTIONS));
    state.budget = JSON.parse(JSON.stringify(INITIAL_BUDGET));
    state.currency = CURRENCIES.find((c) => c.code === 'INR') || CURRENCIES[0];
    localStorage.setItem('apex_currency_code', state.currency.code);
    saveTransactions();
    saveBudget();
    resetFilters();
    addToast('Demo Data Restored', 'Restored 12 sample financial records with default INR (₹) currency.', 'info');
    renderAll();
  };

  const clearAllData = () => {
    state.transactions = [];
    saveTransactions();
    resetFilters();
    addToast('All Records Cleared', 'Starting with a clean slate. All records removed.', 'warning');
    renderAll();
  };

  const resetFilters = () => {
    state.filter = {
      search: '',
      type: 'all',
      category: 'all',
      dateRange: 'all',
      sortBy: 'date_desc'
    };

    const searchInput = document.getElementById('filter-search-input');
    const catSelect = document.getElementById('filter-category-select');
    const dateSelect = document.getElementById('filter-date-select');
    const sortSelect = document.getElementById('filter-sort-select');

    if (searchInput) searchInput.value = '';
    if (catSelect) catSelect.value = 'all';
    if (dateSelect) dateSelect.value = 'all';
    if (sortSelect) sortSelect.value = 'date_desc';

    document.querySelectorAll('.filter-type-pill').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-type') === 'all');
    });

    renderTransactionsList();
  };

  // ==========================================================================
  // 8. Modal Management (Transaction & Budget)
  // ==========================================================================

  const openTransactionModal = (tx = null) => {
    const modal = document.getElementById('transaction-modal');
    const modalTitle = document.getElementById('tx-modal-title');
    const modalSubtitle = document.getElementById('tx-modal-subtitle');
    const amountInput = document.getElementById('tx-amount-input');
    const titleInput = document.getElementById('tx-title-input');
    const dateInput = document.getElementById('tx-date-input');
    const paymentSelect = document.getElementById('tx-payment-select');
    const notesInput = document.getElementById('tx-notes-input');
    const currencySymbol = document.getElementById('tx-modal-currency-symbol');
    const submitBtnText = document.getElementById('tx-submit-btn-text');

    if (!modal) return;

    state.editingTxId = tx ? tx.id : null;
    const rate = state.currency.rate || 1;

    if (currencySymbol) currencySymbol.textContent = state.currency.symbol;

    if (tx) {
      if (modalTitle) modalTitle.textContent = 'Edit Transaction';
      if (modalSubtitle) modalSubtitle.textContent = 'Update details of this entry';
      if (submitBtnText) submitBtnText.textContent = 'Update Record';

      state.modalType = tx.type;
      state.selectedModalCategory = tx.category;

      const convertedAmount = Math.round(tx.amount * rate * 100) / 100;
      if (amountInput) amountInput.value = convertedAmount;
      if (titleInput) titleInput.value = tx.title;
      if (dateInput) dateInput.value = tx.date;
      if (paymentSelect) paymentSelect.value = tx.paymentMethod;
      if (notesInput) notesInput.value = tx.notes || '';
    } else {
      if (modalTitle) modalTitle.textContent = 'Record Transaction';
      if (modalSubtitle) modalSubtitle.textContent = 'Add a new expense or income record';
      if (submitBtnText) submitBtnText.textContent = 'Save Transaction';

      state.modalType = 'expense';
      state.selectedModalCategory = 'food';

      if (amountInput) amountInput.value = '';
      if (titleInput) titleInput.value = '';
      if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
      if (paymentSelect) paymentSelect.value = 'credit_card';
      if (notesInput) notesInput.value = '';
    }

    updateModalTypeSegmentedButtons();
    renderModalCategoryChoices();

    modal.classList.add('active');
    setTimeout(() => {
      if (amountInput) amountInput.focus();
    }, 50);
  };

  const closeTransactionModal = () => {
    const modal = document.getElementById('transaction-modal');
    if (modal) modal.classList.remove('active');
    state.editingTxId = null;
  };

  const updateModalTypeSegmentedButtons = () => {
    const expenseBtn = document.getElementById('modal-type-expense-btn');
    const incomeBtn = document.getElementById('modal-type-income-btn');
    if (expenseBtn) expenseBtn.classList.toggle('active', state.modalType === 'expense');
    if (incomeBtn) incomeBtn.classList.toggle('active', state.modalType === 'income');
  };

  const renderModalCategoryChoices = () => {
    const container = document.getElementById('tx-category-choices');
    if (!container) return;

    const filtered = CATEGORIES.filter((c) => c.type === state.modalType);

    // If current selected category doesn't match active type, reset to first
    if (!filtered.some((c) => c.id === state.selectedModalCategory)) {
      state.selectedModalCategory = filtered[0] ? filtered[0].id : '';
    }

    container.innerHTML = filtered
      .map(
        (cat) => `
      <button type="button" class="category-choice-btn ${cat.id === state.selectedModalCategory ? 'active' : ''}" data-id="${cat.id}">
        <span class="cat-icon-badge" style="background-color: ${cat.solidColor}; width: 22px; height: 22px;">
          ${renderIcon(cat.icon)}
        </span>
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${cat.name}</span>
      </button>
    `
      )
      .join('');

    container.querySelectorAll('.category-choice-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.selectedModalCategory = btn.getAttribute('data-id');
        renderModalCategoryChoices();
      });
    });
  };

  // Budget Planner Modal
  const openBudgetModal = () => {
    const modal = document.getElementById('budget-modal');
    const overallInput = document.getElementById('budget-monthly-limit-input');
    const currencyLabel = document.getElementById('budget-modal-currency-label');
    const symbolSpan = document.getElementById('budget-modal-symbol');
    const categoriesList = document.getElementById('budget-categories-list');

    if (!modal) return;

    const rate = state.currency.rate || 1;
    const convertedMonthly = Math.round((state.budget.monthlyLimit || 0) * rate);

    if (overallInput) overallInput.value = convertedMonthly;
    if (currencyLabel) currencyLabel.textContent = `(${state.currency.symbol})`;
    if (symbolSpan) symbolSpan.textContent = state.currency.symbol;

    const expenseCats = CATEGORIES.filter((c) => c.type === 'expense');

    if (categoriesList) {
      categoriesList.innerHTML = expenseCats
        .map((cat) => {
          const currentLimit = (state.budget.categoryLimits && state.budget.categoryLimits[cat.id]) || 0;
          const convertedCatLimit = Math.round(currentLimit * rate);

          return `
          <div class="budget-limit-row">
            <div class="budget-limit-left">
              <span class="cat-icon-badge" style="background-color: ${cat.solidColor};">
                ${renderIcon(cat.icon)}
              </span>
              <span>${cat.name}</span>
            </div>
            <div style="display:flex;align-items:center;gap:6px;">
              <span style="font-size:12px;font-weight:700;color:var(--text-muted);">${state.currency.symbol}</span>
              <input
                type="number"
                min="0"
                step="10"
                class="budget-limit-input"
                data-cat-id="${cat.id}"
                value="${convertedCatLimit}"
              />
            </div>
          </div>
        `;
        })
        .join('');
    }

    modal.classList.add('active');
  };

  const closeBudgetModal = () => {
    const modal = document.getElementById('budget-modal');
    if (modal) modal.classList.remove('active');
  };

  const openClearConfirmModal = () => {
    const modal = document.getElementById('confirm-clear-modal');
    if (modal) modal.classList.add('active');
  };

  const closeClearConfirmModal = () => {
    const modal = document.getElementById('confirm-clear-modal');
    if (modal) modal.classList.remove('active');
  };

  // Close all popover dropdowns
  const closeAllDropdowns = () => {
    document.querySelectorAll('.dropdown-menu').forEach((m) => m.classList.remove('active'));
  };

  // ==========================================================================
  // 9. Event Listeners Setup
  // ==========================================================================

  const setupEventListeners = () => {
    // 1. Theme Toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
      });
    }

    // 2. Desktop Dropdowns (Currency & Workspace Data)
    const currencyDropdownBtn = document.getElementById('currency-dropdown-toggle');
    const currencyMenu = document.getElementById('desktop-currency-dropdown');
    if (currencyDropdownBtn && currencyMenu) {
      currencyDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = currencyMenu.classList.contains('active');
        closeAllDropdowns();
        if (!isOpen) currencyMenu.classList.add('active');
      });
    }

    const dataDropdownBtn = document.getElementById('data-dropdown-toggle');
    const dataMenu = document.getElementById('desktop-data-dropdown');
    if (dataDropdownBtn && dataMenu) {
      dataDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dataMenu.classList.contains('active');
        closeAllDropdowns();
        if (!isOpen) dataMenu.classList.add('active');
      });
    }

    // Close dropdowns on outside click
    document.addEventListener('click', () => {
      closeAllDropdowns();
    });

    // 3. Workspace Data Actions (Desktop)
    const restoreDemoBtn = document.getElementById('btn-restore-demo');
    if (restoreDemoBtn) {
      restoreDemoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        resetToDemoData();
        closeAllDropdowns();
      });
    }

    const exportCsvBtn = document.getElementById('btn-export-csv');
    if (exportCsvBtn) {
      exportCsvBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeAllDropdowns();
        exportToCSV();
      });
    }

    const headerExportBtn = document.getElementById('header-export-btn');
    if (headerExportBtn) {
      headerExportBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        exportToCSV();
      });
    }

    const clearRecordsBtn = document.getElementById('btn-clear-records');
    if (clearRecordsBtn) {
      clearRecordsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeAllDropdowns();
        openClearConfirmModal();
      });
    }

    // Modal listeners for Confirm Clear
    const clearModalCloseBtn = document.getElementById('clear-modal-close-btn');
    const clearModalCancelBtn = document.getElementById('clear-modal-cancel-btn');
    const clearModalConfirmBtn = document.getElementById('clear-modal-confirm-btn');

    if (clearModalCloseBtn) clearModalCloseBtn.addEventListener('click', closeClearConfirmModal);
    if (clearModalCancelBtn) clearModalCancelBtn.addEventListener('click', closeClearConfirmModal);
    if (clearModalConfirmBtn) {
      clearModalConfirmBtn.addEventListener('click', () => {
        clearAllData();
        closeClearConfirmModal();
      });
    }

    // 4. Mobile Navigation Drawer
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    if (mobileMenuBtn && mobileDrawer) {
      mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileDrawer.classList.toggle('active');
        const isActive = mobileDrawer.classList.contains('active');
        mobileMenuBtn.innerHTML = isActive ? renderIcon('X') : renderIcon('Menu');
      });
    }

    const mobileExportBtn = document.getElementById('mobile-btn-export-csv');
    if (mobileExportBtn) {
      mobileExportBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (mobileDrawer) mobileDrawer.classList.remove('active');
        exportToCSV();
      });
    }

    const mobileRestoreBtn = document.getElementById('mobile-btn-restore-demo');
    if (mobileRestoreBtn) {
      mobileRestoreBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (mobileDrawer) mobileDrawer.classList.remove('active');
        resetToDemoData();
      });
    }

    const mobileClearBtn = document.getElementById('mobile-btn-clear-records');
    if (mobileClearBtn) {
      mobileClearBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (mobileDrawer) mobileDrawer.classList.remove('active');
        openClearConfirmModal();
      });
    }

    // 5. Open Transaction Modal Buttons
    const headerAddBtn = document.getElementById('header-add-tx-btn');
    if (headerAddBtn) headerAddBtn.addEventListener('click', () => openTransactionModal());

    const heroAddBtn = document.getElementById('hero-add-tx-btn');
    if (heroAddBtn) heroAddBtn.addEventListener('click', () => openTransactionModal());

    // 6. Open Budget Modal
    const openBudgetBtn = document.getElementById('open-budget-modal-btn');
    if (openBudgetBtn) openBudgetBtn.addEventListener('click', () => openBudgetModal());

    // 7. Timeframe Toggle for Donut Chart
    const tfAllBtn = document.getElementById('donut-tf-all');
    const tfMonthBtn = document.getElementById('donut-tf-month');
    if (tfAllBtn && tfMonthBtn) {
      tfAllBtn.addEventListener('click', () => {
        state.chartTimeframe = 'all';
        tfAllBtn.classList.add('active');
        tfMonthBtn.classList.remove('active');
        renderDonutChart();
      });

      tfMonthBtn.addEventListener('click', () => {
        state.chartTimeframe = 'this_month';
        tfMonthBtn.classList.add('active');
        tfAllBtn.classList.remove('active');
        renderDonutChart();
      });
    }

    // 8. Transaction Modal Form & Controls
    const txModalCloseBtn = document.getElementById('tx-modal-close-btn');
    const txModalCancelBtn = document.getElementById('tx-modal-cancel-btn');
    if (txModalCloseBtn) txModalCloseBtn.addEventListener('click', closeTransactionModal);
    if (txModalCancelBtn) txModalCancelBtn.addEventListener('click', closeTransactionModal);

    const modalExpenseBtn = document.getElementById('modal-type-expense-btn');
    const modalIncomeBtn = document.getElementById('modal-type-income-btn');
    if (modalExpenseBtn) {
      modalExpenseBtn.addEventListener('click', () => {
        state.modalType = 'expense';
        updateModalTypeSegmentedButtons();
        renderModalCategoryChoices();
      });
    }
    if (modalIncomeBtn) {
      modalIncomeBtn.addEventListener('click', () => {
        state.modalType = 'income';
        updateModalTypeSegmentedButtons();
        renderModalCategoryChoices();
      });
    }

    const txForm = document.getElementById('transaction-form');
    if (txForm) {
      txForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const amountInput = document.getElementById('tx-amount-input');
        const titleInput = document.getElementById('tx-title-input');
        const dateInput = document.getElementById('tx-date-input');
        const paymentSelect = document.getElementById('tx-payment-select');
        const notesInput = document.getElementById('tx-notes-input');

        const numAmount = parseFloat(amountInput.value);
        const title = (titleInput.value || '').trim();

        if (!title || isNaN(numAmount) || numAmount <= 0) {
          alert('Please enter a valid title and positive amount.');
          return;
        }

        const rate = state.currency.rate || 1;
        const baseAmount = numAmount / rate;

        const payload = {
          title,
          amount: baseAmount,
          type: state.modalType,
          category: state.selectedModalCategory,
          date: dateInput.value,
          paymentMethod: paymentSelect.value,
          notes: (notesInput.value || '').trim()
        };

        if (state.editingTxId) {
          updateTransaction(state.editingTxId, payload);
        } else {
          addTransaction(payload);
        }

        closeTransactionModal();
      });
    }

    // 9. Budget Modal Form
    const budgetModalCloseBtn = document.getElementById('budget-modal-close-btn');
    const budgetModalCancelBtn = document.getElementById('budget-modal-cancel-btn');
    if (budgetModalCloseBtn) budgetModalCloseBtn.addEventListener('click', closeBudgetModal);
    if (budgetModalCancelBtn) budgetModalCancelBtn.addEventListener('click', closeBudgetModal);

    const budgetForm = document.getElementById('budget-form');
    if (budgetForm) {
      budgetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const monthlyInput = document.getElementById('budget-monthly-limit-input');
        const rate = state.currency.rate || 1;

        const newMonthlyLimit = Math.max(0, Math.round((parseFloat(monthlyInput.value) / rate) * 100) / 100);

        const newCategoryLimits = {};
        budgetForm.querySelectorAll('.budget-limit-input').forEach((inp) => {
          const catId = inp.getAttribute('data-cat-id');
          const val = Math.max(0, parseFloat(inp.value) || 0);
          newCategoryLimits[catId] = Math.round((val / rate) * 100) / 100;
        });

        updateBudgetLimits({
          monthlyLimit: newMonthlyLimit,
          categoryLimits: newCategoryLimits
        });

        closeBudgetModal();
      });
    }

    // Close Modals on Backdrop Click
    const txModal = document.getElementById('transaction-modal');
    if (txModal) {
      txModal.addEventListener('click', (e) => {
        if (e.target === txModal) closeTransactionModal();
      });
    }

    const bModal = document.getElementById('budget-modal');
    if (bModal) {
      bModal.addEventListener('click', (e) => {
        if (e.target === bModal) closeBudgetModal();
      });
    }

    const cModal = document.getElementById('confirm-clear-modal');
    if (cModal) {
      cModal.addEventListener('click', (e) => {
        if (e.target === cModal) closeClearConfirmModal();
      });
    }

    // 10. Filter Inputs
    const searchInput = document.getElementById('filter-search-input');
    const searchClearBtn = document.getElementById('search-clear-btn');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.filter.search = e.target.value;
        if (searchClearBtn) {
          searchClearBtn.style.display = e.target.value ? 'flex' : 'none';
        }
        renderTransactionsList();
      });
    }

    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        state.filter.search = '';
        searchClearBtn.style.display = 'none';
        renderTransactionsList();
      });
    }

    // Type Filter Pills
    document.querySelectorAll('.filter-type-pill').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-type-pill').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.filter.type = btn.getAttribute('data-type');
        renderTransactionsList();
      });
    });

    // Category Select Filter
    const catSelect = document.getElementById('filter-category-select');
    if (catSelect) {
      catSelect.addEventListener('change', (e) => {
        state.filter.category = e.target.value;
        renderTransactionsList();
      });
    }

    // Date Select Filter
    const dateSelect = document.getElementById('filter-date-select');
    if (dateSelect) {
      dateSelect.addEventListener('change', (e) => {
        state.filter.dateRange = e.target.value;
        renderTransactionsList();
      });
    }

    // Sort Select
    const sortSelect = document.getElementById('filter-sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.filter.sortBy = e.target.value;
        renderTransactionsList();
      });
    }

    // Reset Filters Button
    const resetFiltersBtn = document.getElementById('reset-filters-banner-btn');
    if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetFilters);

    // 11. Keyboard Shortcuts: 'N' to open transaction modal, 'Escape' to close modals
    window.addEventListener('keydown', (e) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        if (e.key === 'Escape') {
          closeTransactionModal();
          closeBudgetModal();
          closeClearConfirmModal();
        }
        return;
      }

      if (e.key === 'n' || e.key === 'N') {
        openTransactionModal();
      } else if (e.key === 'Escape') {
        closeTransactionModal();
        closeBudgetModal();
        closeClearConfirmModal();
        closeAllDropdowns();
      }
    });

    // 12. Back To Top
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    const footerBackToTop = document.getElementById('footer-back-to-top');
    if (footerBackToTop) footerBackToTop.addEventListener('click', scrollToTop);

    const floatingBackToTop = document.getElementById('floating-back-to-top');
    if (floatingBackToTop) {
      floatingBackToTop.addEventListener('click', scrollToTop);

      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || 0;
        const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

        const isAtTop = scrollY <= 60;
        const isAtBottom = windowHeight + scrollY >= docHeight - 50;

        if (isAtTop || isAtBottom) {
          floatingBackToTop.classList.remove('visible');
        } else {
          floatingBackToTop.classList.add('visible');
        }
      });
    }
  };

  // ==========================================================================
  // 10. Application Bootstrap
  // ==========================================================================

  const initApp = () => {
    initState();
    initFilterDropdowns();
    setupEventListeners();
    renderAll();
  };

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
