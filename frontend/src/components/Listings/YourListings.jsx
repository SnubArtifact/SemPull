import { useState, useEffect } from 'react';
import { FiPlus, FiSearch, FiEdit2, FiTrash2, FiUsers, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const YourListings = () => {
  const [userGroups, setUserGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All Groups');

  useEffect(() => {
    fetchUserGroups();
  }, []);

  const fetchUserGroups = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5001/api/yourGroups/your-listings', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Failed to fetch groups');
      }

      const data = await response.json();
      setUserGroups(data);
    } catch (err) {
      console.error('Error fetching groups:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filter groups based on search term and filter type
  const filteredGroups = userGroups.filter(group => {
    const matchesSearch = group.groupName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.courseCode.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterType === 'All Groups') return matchesSearch;
    if (filterType === 'Most Popular') return matchesSearch && group.maxMembers > 10;
    if (filterType === 'Recently Created') {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      return matchesSearch && new Date(group._id) > oneWeekAgo;
    }
    return matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your groups...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button 
            onClick={fetchUserGroups}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Sem<span className="text-blue-500">Pull</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link 
                to="/create-group" 
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                <FiPlus className="mr-2" />
                Create New
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Groups</h1>
          <p className="text-gray-600">Manage and interact with groups you've created</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search your groups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex space-x-2">
            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>All Groups</option>
              <option>Most Popular</option>
              <option>Recently Created</option>
            </select>
          </div>
        </div>

        {/* Groups Grid */}
        {filteredGroups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map(group => (
              <div key={group._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-40 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <FiUsers className="mx-auto text-4xl text-blue-500 mb-2" />
                    <p className="text-sm text-gray-600">{group.courseCode}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{group.groupName}</h3>
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-blue-500 transition">
                        <FiEdit2 />
                      </button>
                      <button className="text-gray-500 hover:text-red-500 transition">
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{group.description}</p>
                  <div className="text-sm text-gray-500 mb-2">
                    <p><strong>Course:</strong> {group.courseCode}</p>
                    <p><strong>Branch:</strong> {group.branch}</p>
                    <p><strong>Meeting Days:</strong> {group.meetingDays}</p>
                    <p><strong>Time:</strong> {group.startTime}:00 - {group.endTime}:00</p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <FiUsers className="mr-1" />
                      <span>Max {group.maxMembers} members</span>
                    </div>
                    <span>Created: {new Date(group._id).toLocaleDateString()}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Link 
                      to={`/group/${group._id}`} 
                      className="flex-grow text-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                      View Group
                    </Link>
                    <Link 
                      to={`/group/${group._id}/manage`} 
                      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                    >
                      Manage
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <div className="mx-auto max-w-md">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                {userGroups.length === 0 ? "You haven't created any groups yet" : "No groups match your search"}
              </h3>
              <p className="text-gray-600 mb-6">
                {userGroups.length === 0 
                  ? "Start a new group to bring people together around shared interests"
                  : "Try adjusting your search terms or filters"
                }
              </p>
              {userGroups.length === 0 && (
                <Link 
                  to="/create-group" 
                  className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  <FiPlus className="mr-2" />
                  Create Your First Group
                </Link>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="text-2xl font-bold">
                Sem<span className="text-blue-400">Pull</span>
              </Link>
            </div>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-400 hover:text-white transition">
                Terms
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white transition">
                Privacy
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} SemPull. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YourListings;