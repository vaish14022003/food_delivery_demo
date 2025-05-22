import { User, MapPin, Clock, CreditCard, Bell, Settings, LogOut, ChevronRight, Star, Menu, Home, Search, ShoppingBag, X, Camera, Save } from 'lucide-react';
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function UserProfile() {

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    photo: null
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(()=>{
    const fetchUserDetail=async()=>{
       const data=await axios.get('');
    }
  })

  const handleInputChange = (field, value) => {
    setUserInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserInfo(prev => ({
          ...prev,
          photo: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordChange = (field, value) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveProfile = () => {
    // Validate password if changed
    if (passwordData.newPassword) {
      if (passwordData.newPassword !== passwordData.confirmPassword) {
        alert('New passwords do not match!');
        return;
      }
      if (passwordData.newPassword.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
      }
    }
    
    // Here you would typically save to your backend
    console.log('Saving profile:', userInfo);
    if (passwordData.newPassword) {
      console.log('Changing password');
    }
    
    // Reset password fields
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    
    setIsEditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-orange-600">FoodieApp</h1>
              </div>
              {/* Desktop Navigation */}
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  <a href="#" className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium flex items-center">
                    <Home className="w-4 h-4 mr-2" />
                    Home
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium flex items-center">
                    <Search className="w-4 h-4 mr-2" />
                    Restaurants
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium flex items-center">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Orders
                  </a>
                </div>
              </div>
            </div>
            
            {/* Profile Avatar */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-orange-600" />
              </div>
              <span className="hidden sm:block ml-2 text-sm font-medium text-gray-700">John Doe</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar - Desktop */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              {/* User Info */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  {userInfo.photo ? (
                    <img src={userInfo.photo} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-10 h-10 text-orange-600" />
                  )}
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{userInfo.name}</h2>
                <p className="text-gray-600 text-sm">{userInfo.email}</p>
                <p className="text-gray-500 text-sm">{userInfo.phone}</p>
              </div>
              
              {/* Navigation Menu */}
              <nav className="space-y-2">
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-50 bg-orange-50 text-orange-700">
                  <User className="w-5 h-5" />
                  <span className="font-medium">Profile</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-50">
                  <Clock className="w-5 h-5" />
                  <span>My Orders</span>
                  <span className="ml-auto text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">3</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-50">
                  <MapPin className="w-5 h-5" />
                  <span>Addresses</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-50">
                  <CreditCard className="w-5 h-5" />
                  <span>Payments</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-50">
                  <Star className="w-5 h-5" />
                  <span>Favorites</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-50">
                  <Bell className="w-5 h-5" />
                  <span>Notifications</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-50">
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </a>
              </nav>
              
              <div className="mt-8 pt-6 border-t">
                <button className="flex items-center space-x-3 px-3 py-2 text-red-600 rounded-lg hover:bg-red-50 w-full">
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Mobile Header */}
            <div className="lg:hidden mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
            </div>

            {/* Profile Section */}
            <div className="bg-white rounded-lg shadow-sm mb-8">
              <div className="px-6 py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                  <div className="sm:flex sm:items-center">
                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 overflow-hidden">
                      {userInfo.photo ? (
                        <img src={userInfo.photo} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        <User className="w-10 h-10 text-orange-600" />
                      )}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{userInfo.name}</h2>
                      <p className="text-gray-600">{userInfo.email}</p>
                      <p className="text-gray-500">{userInfo.phone}</p>
                      <p className="text-sm text-gray-400 mt-1">Member since March 2023</p>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <button 
                      onClick={() => setIsEditModalOpen(true)}
                      className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Order Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">47</div>
                  <div className="text-sm text-gray-500">Total Orders</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">$1,234</div>
                  <div className="text-sm text-gray-500">Total Spent</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-500">Restaurants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">4.8</div>
                  <div className="text-sm text-gray-500">Avg Rating</div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="lg:hidden space-y-4">
              <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-100">
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">My Orders</h3>
                      <p className="text-sm text-gray-500">View order history</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">3 Active</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">My Addresses</h3>
                      <p className="text-sm text-gray-500">Manage delivery addresses</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Payment Methods</h3>
                      <p className="text-sm text-gray-500">Cards and digital wallets</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Favorites</h3>
                      <p className="text-sm text-gray-500">Your favorite restaurants</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Bell className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Notifications</h3>
                      <p className="text-sm text-gray-500">Manage your preferences</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Settings className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Settings</h3>
                      <p className="text-sm text-gray-500">App preferences</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Mobile Support & Logout */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Help & Support</h3>
                      <p className="text-sm text-gray-500">Get help with your orders</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-red-50 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <LogOut className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-red-600">Logout</h3>
                      <p className="text-sm text-gray-500">Sign out of your account</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setIsEditModalOpen(false)}
            ></div>

            {/* Modal */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {/* Modal Header */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Edit Profile</h3>
                  <button
                    onClick={() => setIsEditModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Profile Photo Section */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center overflow-hidden mb-3">
                      {userInfo.photo ? (
                        <img src={userInfo.photo} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        <User className="w-12 h-12 text-orange-600" />
                      )}
                    </div>
                    <label className="absolute bottom-0 right-0 bg-orange-600 rounded-full p-2 cursor-pointer hover:bg-orange-700 transition-colors">
                      <Camera className="w-4 h-4 text-white" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <p className="text-sm text-gray-500">Click the camera icon to upload a photo</p>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={userInfo.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={userInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Password Section */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-md font-medium text-gray-900 mb-3">Change Password (Optional)</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input
                          type="password"
                          value={passwordData.currentPassword}
                          onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                          placeholder="Enter current password"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          value={passwordData.newPassword}
                          onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                          placeholder="Enter new password"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          value={passwordData.confirmPassword}
                          onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                          placeholder="Confirm new password"
                        />
                      </div>
                      
                      <p className="text-xs text-gray-500">
                        Leave password fields empty if you don't want to change your password
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleSaveProfile}
                  className="w-full inline-flex justify-center items-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
