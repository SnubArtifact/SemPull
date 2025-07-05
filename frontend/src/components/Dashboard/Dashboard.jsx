import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiPlus, FiFilter, FiBookmark, FiUsers, FiClock, FiCalendar, FiList } from 'react-icons/fi';

const Dashboard = () => {
  const [studyGroups, setStudyGroups] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    course: '',
    department: '',
    time: '',
    size: ''
  });
  const [isLoading, setIsLoading] = useState(true);

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchStudyGroups = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          const mockGroups = [
            {
              id: 1,
              name: 'CS F111 - Data Structures Study Group',
              course: 'CS F111',
              branch: 'Computer Science',
              description: 'Weekly study sessions for Data Structures course. All skill levels welcome!',
              members: 8,
              maxMembers: 12,
              meetingTime: 'Mon/Wed 4-5pm',
              createdBy: 'Jane Doe',
              isBookmarked: false
            },
            {
              id: 2,
              name: 'PHY F111 - Quantum Mechanics Group',
              course: 'PHY F111',
              department: 'Physics',
              description: 'Collaborative problem solving for Quantum Mechanics assignments.',
              members: 5,
              maxMembers: 10,
              meetingTime: 'Tue/Thu 3-4pm',
              createdBy: 'John Smith',
              isBookmarked: true
            },
            {
              id: 3,
              name: 'MATH F111 - Calculus Study Circle',
              course: 'MATH F111',
              department: 'Mathematics',
              description: 'Preparing for upcoming calculus exams together.',
              members: 6,
              maxMembers: 8,
              meetingTime: 'Fri 2-4pm',
              createdBy: 'Alex Johnson',
              isBookmarked: false
            },
            {
              id: 4,
              name: 'EEE F111 - Circuit Theory Group',
              course: 'EEE F111',
              department: 'Electrical Engineering',
              description: 'Hands-on circuit building and theory discussions.',
              members: 4,
              maxMembers: 6,
              meetingTime: 'Sat 10am-12pm',
              createdBy: 'Sarah Williams',
              isBookmarked: false
            }
          ];
          setStudyGroups(mockGroups);
          setFilteredGroups(mockGroups);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching study groups:', error);
        setIsLoading(false);
      }
    };

    fetchStudyGroups();
  }, []);

  // Apply filters and search
  useEffect(() => {
    let results = studyGroups;

    // Apply search term filter
    if (searchTerm) {
      results = results.filter(group =>
        group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        group.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        group.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply other filters
    if (filters.course) {
      results = results.filter(group => group.course === filters.course);
    }
    if (filters.department) {
      results = results.filter(group => group.department === filters.department);
    }
    if (filters.time) {
      results = results.filter(group => group.meetingTime.includes(filters.time));
    }
    if (filters.size) {
      if (filters.size === 'small') {
        results = results.filter(group => group.maxMembers <= 5);
      } else if (filters.size === 'medium') {
        results = results.filter(group => group.maxMembers > 5 && group.maxMembers <= 10);
      } else if (filters.size === 'large') {
        results = results.filter(group => group.maxMembers > 10);
      }
    }

    setFilteredGroups(results);
  }, [searchTerm, filters, studyGroups]);

  const handleBookmark = (groupId) => {
    setStudyGroups(prevGroups =>
      prevGroups.map(group =>
        group.id === groupId ? { ...group, isBookmarked: !group.isBookmarked } : group
      )
    );
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({
      course: '',
      department: '',
      time: '',
      size: ''
    });
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">SemPull Dashboard</h1>
          <div className="flex items-center space-x-4">
             <Link
              to="/your-listings"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FiList className="mr-2" />
              Your Listings
            </Link>
            <Link
              to="/your-bookmarks"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FiBookmark className="mr-2" />
              Your Bookmarks
            </Link>

            <Link
              to="/create-group"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FiPlus className="mr-2" />
              Create Group
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Search and Filters */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search study groups..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Button (Mobile) */}
            <button
              className="md:hidden inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => document.getElementById('filters').classList.toggle('hidden')}
            >
              <FiFilter className="mr-2" />
              Filters
            </button>

            {/* Filters (Desktop) */}
            <div id="filters" className="hidden md:flex md:space-x-4">
              <select
                name="course"
                value={filters.course}
                onChange={handleFilterChange}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="">All Courses</option>
                <option value="CS F111">CS F111</option>
                <option value="PHY F111">PHY F111</option>
                <option value="MATH F111">MATH F111</option>
                <option value="EEE F111">EEE F111</option>
              </select>

              <select
                name="branch"
                value={filters.branch}
                onChange={handleFilterChange}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="">All Branches</option>
                <option value="CSE">CSE</option>
                <option value="MnC">MnC</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="ENI">ENI</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Chemical">Chemical</option>
                <option value="Civil">Civil</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Economics">Economics</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                
              </select>

              <select
                name="time"
                value={filters.time}
                onChange={handleFilterChange}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="">Any Time</option>
                <option value="Mon">Monday</option>
                <option value="Tue">Tuesday</option>
                <option value="Wed">Wednesday</option>
                <option value="Thu">Thursday</option>
                <option value="Fri">Friday</option>
                <option value="Sat">Saturday</option>
              </select>

              <select
                name="size"
                value={filters.size}
                onChange={handleFilterChange}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="">Any Size</option>
                <option value="small">Small (1-5)</option>
                <option value="medium">Medium (6-10)</option>
                <option value="large">Large (11+)</option>
              </select>

              <button
                onClick={clearFilters}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Study Groups List */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading study groups...</p>
            </div>
          ) : filteredGroups.length === 0 ? (
            <div className="p-8 text-center">
              <h3 className="text-lg font-medium text-gray-900">No study groups found</h3>
              <p className="mt-2 text-gray-600">
                {Object.values(filters).some(f => f) || searchTerm
                  ? "Try adjusting your filters or search term"
                  : "There are currently no study groups available. Be the first to create one!"}
              </p>
              <div className="mt-6">
                <Link
                  to="/create-group"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FiPlus className="mr-2" />
                  Create a Study Group
                </Link>
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {filteredGroups.map((group) => (
                <li key={group.id} className="hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <button
                          onClick={() => handleBookmark(group.id)}
                          className="mr-3 text-gray-400 hover:text-yellow-500"
                        >
                          <FiBookmark
                            className={`h-5 w-5 ${group.isBookmarked ? 'text-yellow-500 fill-yellow-500' : ''}`}
                          />
                        </button>
                        <Link
                          to={`/groups/${group.id}`}
                          className="text-lg font-medium text-blue-600 hover:text-blue-500 truncate"
                        >
                          {group.name}
                        </Link>
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${group.members >= group.maxMembers ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                          {group.members}/{group.maxMembers} members
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          <FiUsers className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                          {group.department} • {group.course}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          <FiClock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                          {group.meetingTime}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <FiCalendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        <p>
                          Created by <span className="text-gray-900">{group.createdBy}</span>
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">{group.description}</p>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Link
                        to={`/groups/${group.id}`}
                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        View Details
                      </Link>
                      <Link
                        to={`/groups/${group.id}/join`}
                        className={`ml-3 inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${group.members >= group.maxMembers ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
                        disabled={group.members >= group.maxMembers}
                      >
                        {group.members >= group.maxMembers ? 'Group Full' : 'Join Group'}
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;