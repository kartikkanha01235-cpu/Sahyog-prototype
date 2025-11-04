// Sample Data
const sampleUsers = [
  {
    id: 1,
    name: "Priya Sharma",
    email: "priya@example.com",
    password: "password",
    location: "Mumbai, Maharashtra",
    skills: ["Teaching", "Tutoring", "Language Learning"],
    bio: "Passionate educator with 5 years of experience. Love helping students succeed!",
    profilePhoto: "https://i.pravatar.cc/150?img=1",
    credits: 23,
    memberSince: "2024-06-15",
    tasksCompleted: 15,
    tasksPosted: 8,
    hoursVolunteered: 32,
    averageRating: 4.8,
    totalRatings: 15,
    achievements: ["first-timer", "helping-hand", "quick-responder"]
  },
  {
    id: 2,
    name: "Raj Patel",
    email: "raj@example.com",
    password: "password",
    location: "Pune, Maharashtra",
    skills: ["Tech Support", "Repairs", "Shopping Help"],
    bio: "Tech enthusiast and handyman. Always ready to help with electronics and home repairs!",
    profilePhoto: "https://i.pravatar.cc/150?img=12",
    credits: 18,
    memberSince: "2024-07-20",
    tasksCompleted: 12,
    tasksPosted: 10,
    hoursVolunteered: 25,
    averageRating: 4.9,
    totalRatings: 12,
    achievements: ["first-timer", "helping-hand", "top-rated"]
  },
  {
    id: 3,
    name: "Anita Desai",
    email: "anita@example.com",
    password: "password",
    location: "Delhi, Delhi",
    skills: ["Cooking", "Gardening", "Shopping Help"],
    bio: "Home chef and gardening enthusiast. Happy to share recipes and growing tips!",
    profilePhoto: "https://i.pravatar.cc/150?img=5",
    credits: 31,
    memberSince: "2024-05-10",
    tasksCompleted: 28,
    tasksPosted: 12,
    hoursVolunteered: 54,
    averageRating: 4.7,
    totalRatings: 28,
    achievements: ["first-timer", "helping-hand", "super-helper"]
  },
  {
    id: 4,
    name: "Vikram Singh",
    email: "vikram@example.com",
    password: "password",
    location: "Bangalore, Karnataka",
    skills: ["Transportation", "Shopping Help", "Career Advice"],
    bio: "Retired professional with time to spare. Love meeting new people and helping out!",
    profilePhoto: "https://i.pravatar.cc/150?img=8",
    credits: 15,
    memberSince: "2024-08-01",
    tasksCompleted: 9,
    tasksPosted: 6,
    hoursVolunteered: 18,
    averageRating: 5.0,
    totalRatings: 9,
    achievements: ["first-timer", "top-rated"]
  },
  {
    id: 5,
    name: "Meera Reddy",
    email: "meera@example.com",
    password: "password",
    location: "Hyderabad, Telangana",
    skills: ["Teaching", "Career Advice", "Language Learning"],
    bio: "Career counselor and mentor. Helping people find their path!",
    profilePhoto: "https://i.pravatar.cc/150?img=9",
    credits: 27,
    memberSince: "2024-06-25",
    tasksCompleted: 22,
    tasksPosted: 11,
    hoursVolunteered: 41,
    averageRating: 4.9,
    totalRatings: 22,
    achievements: ["first-timer", "helping-hand", "top-rated", "quick-responder"]
  }
];

const sampleRequests = [
  {
    id: 1,
    requesterId: 2,
    title: "Need help setting up WiFi router",
    description: "Just bought a new WiFi router and struggling with the setup. Need someone who knows networking to help configure it properly.",
    skills: ["Tech Support"],
    location: "Pune, Maharashtra",
    distance: "1.2 km",
    urgency: "High",
    preferredDateTime: "Today 6:00 PM",
    duration: 1,
    creditsOffered: 2,
    status: "open",
    createdAt: "2025-11-02T10:30:00"
  },
  {
    id: 2,
    requesterId: 4,
    title: "1-hour Math tutoring for 10th grade",
    description: "My grandson needs help with algebra and geometry for his upcoming exams. Looking for patient tutor.",
    skills: ["Teaching", "Tutoring"],
    location: "Bangalore, Karnataka",
    distance: "3.5 km",
    urgency: "Medium",
    preferredDateTime: "Tomorrow 4:00 PM",
    duration: 1,
    creditsOffered: 2,
    status: "open",
    createdAt: "2025-11-02T09:15:00"
  },
  {
    id: 3,
    requesterId: 1,
    title: "Grocery shopping assistance",
    description: "Feeling unwell and need someone to pick up groceries from the local market. Will provide list and money.",
    skills: ["Shopping Help"],
    location: "Mumbai, Maharashtra",
    distance: "0.8 km",
    urgency: "High",
    preferredDateTime: "Today 3:00 PM",
    duration: 1,
    creditsOffered: 2,
    status: "open",
    createdAt: "2025-11-02T11:45:00"
  },
  {
    id: 4,
    requesterId: 5,
    title: "Garden planting help needed",
    description: "Want to plant some vegetables in my backyard garden. Need advice on seasonal plants and help with initial planting.",
    skills: ["Gardening"],
    location: "Hyderabad, Telangana",
    distance: "2.1 km",
    urgency: "Low",
    preferredDateTime: "This weekend",
    duration: 2,
    creditsOffered: 3,
    status: "open",
    createdAt: "2025-11-01T16:20:00"
  },
  {
    id: 5,
    requesterId: 3,
    title: "Resume review and career guidance",
    description: "Switching careers and need someone to review my resume and provide guidance on job search strategies.",
    skills: ["Career Advice"],
    location: "Delhi, Delhi",
    distance: "4.2 km",
    urgency: "Low",
    preferredDateTime: "Next week any day",
    duration: 1,
    creditsOffered: 2,
    status: "open",
    createdAt: "2025-11-01T14:10:00"
  },
  {
    id: 6,
    requesterId: 2,
    title: "Cooking lesson - Traditional Indian dishes",
    description: "Want to learn how to cook authentic dal and roti. Complete beginner, need step-by-step guidance.",
    skills: ["Cooking"],
    location: "Pune, Maharashtra",
    distance: "1.5 km",
    urgency: "Low",
    preferredDateTime: "Weekend mornings",
    duration: 2,
    creditsOffered: 3,
    status: "open",
    createdAt: "2025-11-01T10:05:00"
  },
  {
    id: 7,
    requesterId: 4,
    title: "Spanish language practice partner",
    description: "Learning Spanish online and need someone to practice conversation with. Beginner level.",
    skills: ["Language Learning"],
    location: "Bangalore, Karnataka",
    distance: "2.8 km",
    urgency: "Medium",
    preferredDateTime: "Flexible weekdays",
    duration: 1,
    creditsOffered: 2,
    status: "open",
    createdAt: "2025-10-31T18:30:00"
  }
];

const achievementsData = [
  { id: "first-timer", name: "First Timer", description: "Completed your first task", icon: "🌟" },
  { id: "helping-hand", name: "Helping Hand", description: "Completed 10 tasks", icon: "🤝" },
  { id: "super-helper", name: "Super Helper", description: "Completed 50 tasks", icon: "⭐" },
  { id: "quick-responder", name: "Quick Responder", description: "Average response time under 1 hour", icon: "⚡" },
  { id: "community-champion", name: "Community Champion", description: "Completed 100+ tasks", icon: "🏆" },
  { id: "top-rated", name: "Top Rated", description: "Maintains 4.8+ average rating", icon: "💎" }
];

const skillsList = [
  "Teaching", "Tech Support", "Repairs", "Shopping Help", "Gardening", "Cooking",
  "Transportation", "Tutoring", "Career Advice", "Language Learning", "Elderly Care",
  "Pet Care", "Home Cleaning", "Event Help", "Moving Assistance"
];

// Application State
const app = {
  currentUser: null,
  users: [...sampleUsers],
  requests: [...sampleRequests],
  tasks: [],
  ratings: [],
  notifications: [],
  selectedSkills: [],
  selectedRequestSkills: [],
  currentView: 'dashboard',
  currentRequestId: null,
  feedbackTags: [],

  // Initialize app
  init() {
    this.renderSkillsSelector();
    this.attachEventListeners();
  },

  // Page Management
  showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
  },

  // Auth Functions
  switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    document.getElementById(`${tab}-form`).classList.add('active');
  },

  renderSkillsSelector() {
    const container = document.getElementById('skills-selector');
    if (!container) return;
    
    container.innerHTML = skillsList.map(skill => 
      `<div class="skill-chip" data-skill="${skill}">${skill}</div>`
    ).join('');

    container.querySelectorAll('.skill-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        chip.classList.toggle('selected');
        const skill = chip.dataset.skill;
        if (this.selectedSkills.includes(skill)) {
          this.selectedSkills = this.selectedSkills.filter(s => s !== skill);
        } else {
          this.selectedSkills.push(skill);
        }
      });
    });
  },

  renderRequestSkillsSelector() {
    const container = document.getElementById('request-skills-selector');
    if (!container) return;
    
    container.innerHTML = skillsList.map(skill => 
      `<div class="skill-chip" data-skill="${skill}">${skill}</div>`
    ).join('');

    container.querySelectorAll('.skill-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        chip.classList.toggle('selected');
        const skill = chip.dataset.skill;
        if (this.selectedRequestSkills.includes(skill)) {
          this.selectedRequestSkills = this.selectedRequestSkills.filter(s => s !== skill);
        } else {
          this.selectedRequestSkills.push(skill);
        }
      });
    });
  },

  signup(formData) {
    const email = formData.get('email');
    if (this.users.find(u => u.email === email)) {
      this.showToast('Email already registered', 'error');
      return;
    }

    if (this.selectedSkills.length === 0) {
      this.showToast('Please select at least one skill', 'error');
      return;
    }

    const newUser = {
      id: this.users.length + 1,
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      location: formData.get('location'),
      skills: [...this.selectedSkills],
      bio: formData.get('bio') || '',
      profilePhoto: formData.get('profilePhoto') || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      credits: 5, // Welcome credits
      memberSince: new Date().toISOString().split('T')[0],
      tasksCompleted: 0,
      tasksPosted: 0,
      hoursVolunteered: 0,
      averageRating: 0,
      totalRatings: 0,
      achievements: []
    };

    this.users.push(newUser);
    this.currentUser = newUser;
    this.showToast('Account created successfully! Welcome to Sahyog!', 'success');
    this.afterLogin();
  },

  login(formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    
    const user = this.users.find(u => u.email === email && u.password === password);
    
    if (user) {
      this.currentUser = user;
      this.showToast(`Welcome back, ${user.name}!`, 'success');
      this.afterLogin();
    } else {
      this.showToast('Invalid email or password', 'error');
    }
  },

  afterLogin() {
    this.showPage('main-app');
    this.updateUserProfile();
    this.switchView('dashboard');
    this.addNotification({
      type: 'info',
      icon: '👋',
      title: 'Welcome!',
      message: 'Check out help requests matching your skills',
      timestamp: new Date()
    });
  },

  logout() {
    this.currentUser = null;
    this.showPage('landing-page');
    this.showToast('Logged out successfully', 'success');
  },

  updateUserProfile() {
    if (!this.currentUser) return;

    document.getElementById('header-avatar').src = this.currentUser.profilePhoto;
    document.getElementById('sidebar-avatar').src = this.currentUser.profilePhoto;
    document.getElementById('sidebar-name').textContent = this.currentUser.name;
    document.getElementById('sidebar-credits').textContent = this.currentUser.credits;
    document.getElementById('sidebar-location').textContent = this.currentUser.location;
    document.getElementById('sidebar-tasks').textContent = this.currentUser.tasksCompleted;
    document.getElementById('sidebar-hours').textContent = this.currentUser.hoursVolunteered;
  },

  // View Management
  switchView(viewName) {
    this.currentView = viewName;
    
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.querySelector(`[data-view="${viewName}"]`)?.classList.add('active');
    
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.getElementById(`${viewName}-view`).classList.add('active');

    // Render content based on view
    switch(viewName) {
      case 'dashboard':
        this.renderDashboard();
        break;
      case 'browse':
        this.renderBrowseRequests();
        this.renderSkillFilters();
        break;
      case 'post-request':
        this.renderRequestSkillsSelector();
        document.getElementById('request-location').value = this.currentUser.location;
        document.getElementById('credits-balance').textContent = this.currentUser.credits;
        break;
      case 'my-requests':
        this.renderMyRequests();
        break;
      case 'leaderboard':
        this.renderLeaderboard('alltime');
        break;
    }
  },

  // Dashboard
  renderDashboard() {
    this.renderMatchedRequests();
    this.renderActiveTasks();
    this.renderActivityFeed();
  },

  renderMatchedRequests() {
    const container = document.getElementById('matched-requests');
    const matched = this.requests.filter(r => 
      r.status === 'open' && 
      r.requesterId !== this.currentUser.id &&
      r.skills.some(skill => this.currentUser.skills.includes(skill))
    );

    if (matched.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔍</div><p>No matching requests right now. Check back soon!</p></div>';
      return;
    }

    container.innerHTML = matched.map(request => this.renderRequestCard(request)).join('');
  },

  renderRequestCard(request) {
    const requester = this.users.find(u => u.id === request.requesterId);
    if (!requester) return '';

    return `
      <div class="request-card" onclick="app.showRequestDetail(${request.id})">
        <div class="request-header">
          <img src="${requester.profilePhoto}" alt="${requester.name}" class="requester-avatar">
          <div class="requester-info">
            <h4>${requester.name}</h4>
            <p class="requester-location">📍 ${request.distance}</p>
          </div>
        </div>
        <h3 class="request-title">${request.title}</h3>
        <p class="request-description">${request.description}</p>
        <div class="request-meta">
          <span class="meta-item">⏰ ${request.preferredDateTime}</span>
          <span class="meta-item">⏱️ ${request.duration}h</span>
        </div>
        <div class="request-skills">
          ${request.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
        <div class="request-footer">
          <span class="urgency-badge urgency-${request.urgency.toLowerCase()}">${request.urgency}</span>
          <span class="credits-offer">💰 ${request.creditsOffered} credits</span>
        </div>
      </div>
    `;
  },

  renderActiveTasks() {
    const container = document.getElementById('active-tasks');
    const userTasks = this.tasks.filter(t => 
      (t.requesterId === this.currentUser.id || t.volunteerId === this.currentUser.id) &&
      t.status !== 'completed'
    );

    if (userTasks.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">✅</div><p>No active tasks. Browse requests to help someone!</p></div>';
      return;
    }

    container.innerHTML = userTasks.map(task => {
      const isHelper = task.volunteerId === this.currentUser.id;
      const otherUser = this.users.find(u => u.id === (isHelper ? task.requesterId : task.volunteerId));
      
      return `
        <div class="task-card">
          <div class="task-info">
            <div class="task-title">${task.title}</div>
            <div class="task-details">${isHelper ? 'Helping' : 'Getting help from'} ${otherUser?.name}</div>
          </div>
          <span class="status-badge">${task.status}</span>
        </div>
      `;
    }).join('');
  },

  renderActivityFeed() {
    const container = document.getElementById('activity-feed');
    const activities = [
      { icon: '🆕', text: 'New help request posted in your area', time: '5 minutes ago' },
      { icon: '✅', text: 'Task completed: WiFi Setup Help', time: '2 hours ago' },
      { icon: '💰', text: 'You earned 2 credits!', time: '2 hours ago' },
      { icon: '⭐', text: 'New 5-star review received', time: '1 day ago' }
    ];

    container.innerHTML = activities.map(activity => `
      <div class="activity-item">
        <div class="activity-icon">${activity.icon}</div>
        <div class="activity-content">
          <div class="activity-text">${activity.text}</div>
          <div class="activity-time">${activity.time}</div>
        </div>
      </div>
    `).join('');
  },

  // Browse Requests
  renderBrowseRequests() {
    const container = document.getElementById('browse-requests');
    let filteredRequests = this.requests.filter(r => 
      r.status === 'open' && r.requesterId !== this.currentUser.id
    );

    // Apply filters
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    if (searchTerm) {
      filteredRequests = filteredRequests.filter(r => 
        r.title.toLowerCase().includes(searchTerm) || 
        r.description.toLowerCase().includes(searchTerm)
      );
    }

    const selectedSkillFilters = Array.from(document.querySelectorAll('.skill-filter:checked')).map(cb => cb.value);
    if (selectedSkillFilters.length > 0) {
      filteredRequests = filteredRequests.filter(r => 
        r.skills.some(skill => selectedSkillFilters.includes(skill))
      );
    }

    const selectedUrgencies = Array.from(document.querySelectorAll('.urgency-filter:checked')).map(cb => cb.value);
    if (selectedUrgencies.length > 0) {
      filteredRequests = filteredRequests.filter(r => selectedUrgencies.includes(r.urgency));
    }

    // Sort
    const sortBy = document.getElementById('sort-select')?.value || 'recent';
    if (sortBy === 'recent') {
      filteredRequests.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortBy === 'credits') {
      filteredRequests.sort((a, b) => b.creditsOffered - a.creditsOffered);
    } else if (sortBy === 'urgent') {
      const urgencyOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
      filteredRequests.sort((a, b) => urgencyOrder[b.urgency] - urgencyOrder[a.urgency]);
    }

    if (filteredRequests.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔍</div><p>No requests found. Try adjusting your filters.</p></div>';
      return;
    }

    container.innerHTML = filteredRequests.map(request => this.renderRequestCard(request)).join('');
  },

  renderSkillFilters() {
    const container = document.getElementById('skill-filters');
    if (!container) return;
    
    container.innerHTML = skillsList.map(skill => `
      <label class="checkbox-group">
        <input type="checkbox" value="${skill}" class="skill-filter">
        ${skill}
      </label>
    `).join('');

    container.querySelectorAll('.skill-filter').forEach(cb => {
      cb.addEventListener('change', () => this.applyFilters());
    });
  },

  applyFilters() {
    this.renderBrowseRequests();
  },

  resetFilters() {
    document.getElementById('search-input').value = '';
    document.querySelectorAll('.skill-filter, .urgency-filter').forEach(cb => cb.checked = false);
    document.getElementById('sort-select').value = 'recent';
    this.applyFilters();
  },

  showRequestDetail(requestId) {
    const request = this.requests.find(r => r.id === requestId);
    if (!request) return;

    const requester = this.users.find(u => u.id === request.requesterId);
    const modal = document.getElementById('request-modal');
    const titleEl = document.getElementById('modal-request-title');
    const bodyEl = document.getElementById('modal-request-body');

    titleEl.textContent = request.title;
    bodyEl.innerHTML = `
      <div class="request-header" style="margin-bottom: 20px;">
        <img src="${requester.profilePhoto}" alt="${requester.name}" class="requester-avatar">
        <div class="requester-info">
          <h4>${requester.name}</h4>
          <p class="requester-location">📍 ${request.location} (${request.distance})</p>
          <div style="margin-top: 8px;">⭐ ${requester.averageRating.toFixed(1)} (${requester.totalRatings} reviews)</div>
        </div>
      </div>
      <div style="margin-bottom: 16px;">
        <strong>Description:</strong>
        <p style="margin-top: 8px;">${request.description}</p>
      </div>
      <div style="margin-bottom: 16px;">
        <strong>Skills Needed:</strong>
        <div class="request-skills" style="margin-top: 8px;">
          ${request.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      </div>
      <div style="margin-bottom: 16px;">
        <strong>Details:</strong>
        <div style="margin-top: 8px;">
          <div>⏰ Preferred Time: ${request.preferredDateTime}</div>
          <div style="margin-top: 4px;">⏱️ Duration: ${request.duration} hour(s)</div>
          <div style="margin-top: 4px;">⚡ Urgency: <span class="urgency-badge urgency-${request.urgency.toLowerCase()}">${request.urgency}</span></div>
          <div style="margin-top: 4px;">💰 Credits Offered: ${request.creditsOffered}</div>
        </div>
      </div>
      <button class="btn btn--primary" onclick="app.acceptRequest(${request.id})">Accept Request</button>
    `;

    modal.classList.add('active');
  },

  acceptRequest(requestId) {
    const request = this.requests.find(r => r.id === requestId);
    if (!request || request.status !== 'open') return;

    request.status = 'accepted';
    request.volunteerId = this.currentUser.id;
    request.acceptedAt = new Date();

    this.tasks.push({...request});

    // Notify requester
    this.addNotification({
      type: 'success',
      icon: '✅',
      title: 'Request Accepted',
      message: `${this.currentUser.name} accepted your request: ${request.title}`,
      userId: request.requesterId,
      timestamp: new Date()
    });

    // Notify volunteer
    this.addNotification({
      type: 'success',
      icon: '👍',
      title: 'You accepted a request',
      message: `You're now helping with: ${request.title}`,
      userId: this.currentUser.id,
      timestamp: new Date()
    });

    this.closeModal('request-modal');
    this.showToast('Request accepted! Check "My Requests" for details.', 'success');
    this.switchView('my-requests');
  },

  // Post Request
  postRequest(formData) {
    if (this.selectedRequestSkills.length === 0) {
      this.showToast('Please select at least one skill', 'error');
      return;
    }

    const creditsOffered = parseInt(formData.get('creditsOffered'));
    if (creditsOffered > this.currentUser.credits) {
      this.showToast('Insufficient credits', 'error');
      return;
    }

    const newRequest = {
      id: this.requests.length + 1,
      requesterId: this.currentUser.id,
      title: formData.get('title'),
      description: formData.get('description'),
      skills: [...this.selectedRequestSkills],
      location: formData.get('location'),
      distance: '0 km',
      urgency: formData.get('urgency'),
      preferredDateTime: formData.get('preferredDateTime'),
      duration: parseInt(formData.get('duration')),
      creditsOffered: creditsOffered,
      status: 'open',
      createdAt: new Date().toISOString()
    };

    this.requests.push(newRequest);
    this.currentUser.credits -= creditsOffered; // Hold credits in escrow
    this.currentUser.tasksPosted++;
    this.updateUserProfile();

    // Notify matching volunteers
    this.users.forEach(user => {
      if (user.id !== this.currentUser.id && 
          user.skills.some(skill => newRequest.skills.includes(skill))) {
        this.addNotification({
          type: 'request',
          icon: '🔔',
          title: 'New Request Matching Your Skills',
          message: newRequest.title,
          userId: user.id,
          relatedId: newRequest.id,
          timestamp: new Date()
        });
      }
    });

    this.showToast('Request posted successfully!', 'success');
    this.selectedRequestSkills = [];
    this.switchView('my-requests');
  },

  // My Requests
  switchMyRequestsTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    if (tab === 'posted') {
      document.getElementById('my-posted-requests').classList.add('active');
    } else {
      document.getElementById('my-helping-tasks').classList.add('active');
    }
  },

  renderMyRequests() {
    this.renderMyPostedRequests();
    this.renderMyHelpingTasks();
  },

  renderMyPostedRequests() {
    const container = document.getElementById('my-posted-requests');
    const myRequests = [...this.requests, ...this.tasks].filter(r => r.requesterId === this.currentUser.id);

    if (myRequests.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📝</div><p>You haven\'t posted any requests yet.</p></div>';
      return;
    }

    container.innerHTML = myRequests.map(request => {
      const volunteer = request.volunteerId ? this.users.find(u => u.id === request.volunteerId) : null;
      
      return `
        <div class="task-card">
          <div class="task-info">
            <div class="task-title">${request.title}</div>
            <div class="task-details">
              ${volunteer ? `Accepted by ${volunteer.name}` : 'Waiting for volunteer'}
            </div>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            <span class="status-badge">${request.status}</span>
            ${request.status === 'accepted' ? `<button class="btn btn--sm btn--primary" onclick="app.markTaskComplete(${request.id}, true)">Mark Complete</button>` : ''}
          </div>
        </div>
      `;
    }).join('');
  },

  renderMyHelpingTasks() {
    const container = document.getElementById('my-helping-tasks');
    const myTasks = this.tasks.filter(t => t.volunteerId === this.currentUser.id);

    if (myTasks.length === 0) {
      container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🤝</div><p>You haven\'t accepted any requests yet.</p></div>';
      return;
    }

    container.innerHTML = myTasks.map(task => {
      const requester = this.users.find(u => u.id === task.requesterId);
      
      return `
        <div class="task-card">
          <div class="task-info">
            <div class="task-title">${task.title}</div>
            <div class="task-details">Helping ${requester?.name}</div>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            <span class="status-badge">${task.status}</span>
            ${task.status === 'accepted' ? `<button class="btn btn--sm btn--primary" onclick="app.markTaskComplete(${task.id}, false)">Mark Complete</button>` : ''}
          </div>
        </div>
      `;
    }).join('');
  },

  markTaskComplete(taskId, isRequester) {
    const task = this.tasks.find(t => t.id === taskId);
    if (!task) return;

    task.status = 'completed';
    task.completedAt = new Date();

    // Show feedback modal
    this.currentRequestId = taskId;
    this.showFeedbackModal(task);
  },

  showFeedbackModal(task) {
    const modal = document.getElementById('feedback-modal');
    document.getElementById('feedback-task-id').value = task.id;
    document.getElementById('rating-value').value = 0;
    document.getElementById('feedback-comment').value = '';
    this.feedbackTags = [];
    this.updateStarRating(0);
    modal.classList.add('active');
  },

  updateStarRating(rating) {
    document.querySelectorAll('.star').forEach((star, index) => {
      if (index < rating) {
        star.classList.add('active');
        star.textContent = '★';
      } else {
        star.classList.remove('active');
        star.textContent = '☆';
      }
    });
  },

  addFeedbackTag(btn, tag) {
    btn.classList.toggle('active');
    if (this.feedbackTags.includes(tag)) {
      this.feedbackTags = this.feedbackTags.filter(t => t !== tag);
    } else {
      this.feedbackTags.push(tag);
    }
  },

  submitFeedback() {
    const taskId = parseInt(document.getElementById('feedback-task-id').value);
    const rating = parseInt(document.getElementById('rating-value').value);
    const comment = document.getElementById('feedback-comment').value;

    if (rating === 0) {
      this.showToast('Please select a rating', 'error');
      return;
    }

    const task = this.tasks.find(t => t.id === taskId);
    if (!task) return;

    const isHelper = task.volunteerId === this.currentUser.id;
    const otherUserId = isHelper ? task.requesterId : task.volunteerId;
    const otherUser = this.users.find(u => u.id === otherUserId);

    // Create rating
    const newRating = {
      id: this.ratings.length + 1,
      taskId: taskId,
      fromUserId: this.currentUser.id,
      toUserId: otherUserId,
      rating: rating,
      comment: this.feedbackTags.join(', ') + (comment ? '. ' + comment : ''),
      timestamp: new Date()
    };

    this.ratings.push(newRating);

    // Update user stats
    const userRatings = this.ratings.filter(r => r.toUserId === otherUserId);
    const avgRating = userRatings.reduce((sum, r) => sum + r.rating, 0) / userRatings.length;
    otherUser.averageRating = avgRating;
    otherUser.totalRatings = userRatings.length;

    // Transfer credits
    if (isHelper) {
      const creditsEarned = task.creditsOffered + (rating === 5 ? 1 : 0); // Bonus for 5 stars
      this.currentUser.credits += creditsEarned;
      this.currentUser.tasksCompleted++;
      this.currentUser.hoursVolunteered += task.duration;
      
      this.addNotification({
        type: 'success',
        icon: '💰',
        title: 'Credits Earned',
        message: `You earned ${creditsEarned} credits!`,
        userId: this.currentUser.id,
        timestamp: new Date()
      });
    }

    // Check achievements
    this.checkAchievements();

    this.updateUserProfile();
    this.closeModal('feedback-modal');
    this.showToast('Feedback submitted successfully!', 'success');
    this.renderMyRequests();
  },

  checkAchievements() {
    const newAchievements = [];

    if (this.currentUser.tasksCompleted === 1 && !this.currentUser.achievements.includes('first-timer')) {
      newAchievements.push('first-timer');
    }
    if (this.currentUser.tasksCompleted >= 10 && !this.currentUser.achievements.includes('helping-hand')) {
      newAchievements.push('helping-hand');
    }
    if (this.currentUser.tasksCompleted >= 50 && !this.currentUser.achievements.includes('super-helper')) {
      newAchievements.push('super-helper');
    }
    if (this.currentUser.averageRating >= 4.8 && this.currentUser.totalRatings >= 5 && !this.currentUser.achievements.includes('top-rated')) {
      newAchievements.push('top-rated');
    }

    newAchievements.forEach(achievementId => {
      this.currentUser.achievements.push(achievementId);
      const achievement = achievementsData.find(a => a.id === achievementId);
      this.showAchievementModal(achievement);
    });
  },

  showAchievementModal(achievement) {
    const modal = document.getElementById('achievement-modal');
    document.getElementById('achievement-icon').textContent = achievement.icon;
    document.getElementById('achievement-name').textContent = achievement.name;
    document.getElementById('achievement-description').textContent = achievement.description;
    modal.classList.add('active');
  },

  // Leaderboard
  switchLeaderboardTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    this.renderLeaderboard(tab);
  },

  renderLeaderboard(type) {
    const container = document.getElementById('leaderboard-content');
    const sortedUsers = [...this.users].sort((a, b) => b.tasksCompleted - a.tasksCompleted);

    container.innerHTML = sortedUsers.map((user, index) => {
      const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';
      const isCurrentUser = user.id === this.currentUser.id;
      
      return `
        <div class="leaderboard-item" style="${isCurrentUser ? 'background: var(--color-bg-1);' : ''}">
          ${medal ? `<div class="rank-medal">${medal}</div>` : `<div class="rank-number">${index + 1}</div>`}
          <img src="${user.profilePhoto}" alt="${user.name}" class="leaderboard-avatar">
          <div class="leaderboard-info">
            <div class="leaderboard-name">${user.name} ${isCurrentUser ? '(You)' : ''}</div>
            <div class="leaderboard-stats">
              ✅ ${user.tasksCompleted} tasks · 💰 ${user.credits} credits · ⭐ ${user.averageRating.toFixed(1)}
            </div>
          </div>
          <div class="leaderboard-badges">
            ${user.achievements.slice(0, 3).map(achId => {
              const ach = achievementsData.find(a => a.id === achId);
              return `<span class="badge-icon" title="${ach?.name}">${ach?.icon}</span>`;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');
  },

  // Profile
  viewProfile(userId) {
    const user = this.users.find(u => u.id === userId);
    if (!user) return;

    const isOwnProfile = user.id === this.currentUser.id;
    const container = document.getElementById('profile-content');

    container.innerHTML = `
      <div class="profile-header">
        <img src="${user.profilePhoto}" alt="${user.name}" class="profile-avatar-large">
        <h2 class="profile-name">${user.name}</h2>
        <p class="profile-location">📍 ${user.location}</p>
        <p class="profile-bio">${user.bio}</p>
        ${isOwnProfile ? `<button class="btn btn--primary" onclick="alert('Edit profile feature coming soon!')">✏️ Edit Profile</button>` : ''}
      </div>

      <div class="profile-stats-grid">
        <div class="profile-stat-card">
          <div class="profile-stat-value">${user.tasksCompleted}</div>
          <div class="profile-stat-label">Tasks Completed</div>
        </div>
        <div class="profile-stat-card">
          <div class="profile-stat-value">${user.hoursVolunteered}</div>
          <div class="profile-stat-label">Hours Contributed</div>
        </div>
        <div class="profile-stat-card">
          <div class="star-rating-display">
            ${Array(5).fill(0).map((_, i) => `<span>${i < Math.round(user.averageRating) ? '★' : '☆'}</span>`).join('')}
          </div>
          <div class="profile-stat-label">${user.averageRating.toFixed(1)} Average Rating</div>
        </div>
        ${isOwnProfile ? `
          <div class="profile-stat-card">
            <div class="profile-stat-value">${user.credits}</div>
            <div class="profile-stat-label">Help Credits</div>
          </div>
        ` : ''}
      </div>

      <div class="profile-skills-section">
        <h3 class="profile-section-title">Skills</h3>
        <div class="skills-grid">
          ${user.skills.map(skill => `<span class="skill-chip selected">${skill}</span>`).join('')}
        </div>
      </div>

      <div class="profile-skills-section">
        <h3 class="profile-section-title">Achievements</h3>
        <div class="achievements-grid">
          ${user.achievements.map(achId => {
            const ach = achievementsData.find(a => a.id === achId);
            return `
              <div class="achievement-card">
                <div class="achievement-icon-large">${ach.icon}</div>
                <div class="achievement-name">${ach.name}</div>
                <div class="achievement-description">${ach.description}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    this.switchView('profile');
  },

  // Notifications
  toggleNotifications() {
    const panel = document.getElementById('notifications-panel');
    panel.classList.toggle('active');
    this.renderNotifications();
  },

  addNotification(notification) {
    const targetUserId = notification.userId || this.currentUser.id;
    this.notifications.push({
      id: this.notifications.length + 1,
      ...notification,
      userId: targetUserId,
      read: false
    });
    this.updateNotificationBadge();
  },

  renderNotifications() {
    const container = document.getElementById('notifications-list');
    const userNotifications = this.notifications
      .filter(n => n.userId === this.currentUser.id)
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    if (userNotifications.length === 0) {
      container.innerHTML = '<div class="empty-state"><p>No notifications</p></div>';
      return;
    }

    container.innerHTML = userNotifications.map(notification => {
      const timeAgo = this.getTimeAgo(notification.timestamp);
      return `
        <div class="notification-item ${notification.read ? '' : 'unread'}" onclick="app.markNotificationRead(${notification.id})">
          <div class="notification-header">
            <span class="notification-icon">${notification.icon}</span>
            <div class="notification-title">${notification.title}</div>
            <div class="notification-time">${timeAgo}</div>
          </div>
          <div class="notification-message">${notification.message}</div>
        </div>
      `;
    }).join('');
  },

  markNotificationRead(notificationId) {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.read = true;
      this.updateNotificationBadge();
      this.renderNotifications();
    }
  },

  markAllNotificationsRead() {
    this.notifications.forEach(n => {
      if (n.userId === this.currentUser.id) {
        n.read = true;
      }
    });
    this.updateNotificationBadge();
    this.renderNotifications();
  },

  updateNotificationBadge() {
    const unreadCount = this.notifications.filter(n => 
      n.userId === this.currentUser.id && !n.read
    ).length;
    const badge = document.getElementById('notification-badge');
    if (badge) {
      badge.textContent = unreadCount;
      badge.style.display = unreadCount > 0 ? 'block' : 'none';
    }
  },

  getTimeAgo(timestamp) {
    const now = new Date();
    const diff = now - new Date(timestamp);
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    return `${days} day${days > 1 ? 's' : ''} ago`;
  },

  // UI Helpers
  toggleUserMenu() {
    document.getElementById('user-dropdown').classList.toggle('active');
  },

  closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
  },

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <div class="toast-title">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'} ${type.charAt(0).toUpperCase() + type.slice(1)}</div>
      <div class="toast-message">${message}</div>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'slideIn 0.3s ease reverse';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  // Event Listeners
  attachEventListeners() {
    // Signup form
    document.getElementById('signup-form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.signup(new FormData(e.target));
    });

    // Login form
    document.getElementById('login-form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.login(new FormData(e.target));
    });

    // Post request form
    document.getElementById('post-request-form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.postRequest(new FormData(e.target));
    });

    // Feedback form
    document.getElementById('feedback-form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.submitFeedback();
    });

    // Star rating
    document.querySelectorAll('.star').forEach(star => {
      star.addEventListener('click', () => {
        const rating = parseInt(star.dataset.rating);
        document.getElementById('rating-value').value = rating;
        this.updateStarRating(rating);
      });
    });

    // Search and filters
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', () => this.applyFilters());
    }

    document.querySelectorAll('.urgency-filter').forEach(cb => {
      cb.addEventListener('change', () => this.applyFilters());
    });

    // Close modals on backdrop click
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.user-menu')) {
        document.getElementById('user-dropdown')?.classList.remove('active');
      }
      if (!e.target.closest('.icon-btn') && !e.target.closest('.notifications-panel')) {
        document.getElementById('notifications-panel')?.classList.remove('active');
      }
    });
  }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});