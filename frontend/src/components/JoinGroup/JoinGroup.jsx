import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const JoinGroup = () => {
  return (
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Create New Study Group</h1>
              <button
                onClick={() => navigate('/dashboard')}
                className="p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            <p className="mt-1 opacity-90">Bring students together for collaborative learning</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Group Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Group Name</label>
              <input
                type="text"
                name="groupName"
                value={formData.groupName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>

            {/* Course and Branch */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Course Code</label>
                <div className="relative">
                  <FiBook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="courseCode"
                    value={formData.courseCode}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Branch</label>
                <input
                  type="text"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>

            {/* Max Members */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Maximum Members</label>
              <div className="relative">
                <FiUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  name="maxMembers"
                  min="2"
                  max="20"
                  value={formData.maxMembers}
                  onChange={handleChange}
                  className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
            </div>

            {/* Meeting Days */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Meeting Days</label>
              <div className="flex flex-wrap gap-2">
                {days.map(day => (
                  <motion.button
                    key={day}
                    type="button"
                    onClick={() => toggleDay(day)}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      formData.meetingDays ? formData.meetingDays.split(',').includes(day) : false
                        ? 'bg-blue-100 text-blue-700 border border-blue-300'
                        : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                    }`}
                  >
                    {day.slice(0, 3)}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Meeting Time */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Meeting Time</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <FiClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    name="startTime"
                    value={`${formData.startTime.toString().padStart(2, '0')}:00`}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                    required
                  >
                    <option value="">Start Time</option>
                    {timeOptions.map(time => (
                      <option key={`start-${time}`} value={time}>
                        {formatTimeDisplay(time)}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <FiClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    name="endTime"
                    value={`${formData.endTime.toString().padStart(2, '0')}:00`}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                    required
                  >
                    <option value="">End Time</option>
                    {timeOptions.map(time => (
                      <option key={`end-${time}`} value={time}>
                        {formatTimeDisplay(time)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
  type="submit"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="w-full mt-8 py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
>
  <div className="flex items-center justify-center space-x-2">
    <FiPlus className="w-5 h-5" />
    <span>Create Study Group</span>
  </div>
</motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default JoinGroup
