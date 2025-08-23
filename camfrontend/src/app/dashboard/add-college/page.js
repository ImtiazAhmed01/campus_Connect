'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const AddCollegeForm = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
    control
  } = useForm({
    defaultValues: {
      // Overview
      name: '',
      location: '',
      establishedYear: '',
      description: '',
      website: '',
      logo: '',
      academicPrograms: [],
      campusFacilities: [],

      // Admissions
      admissionProcess: '',
      requirements: '',
      deadlines: '',
      tuitionFees: '',
      financialAid: '',

      // Events
      events: [],

      // Research
      researchAreas: [],
      facilities: '',
      publications: [],
      researchCenters: [],

      // Sports
      sportsFacilities: '',
      teams: [],
      achievements: ''
    }
  });

  // Helper functions for array fields
  const addToArray = (fieldName, newItem) => {
    const currentItems = getValues(fieldName) || [];
    setValue(fieldName, [...currentItems, newItem]);
    return { [fieldName.split('.')[0]]: '' }; // Reset the input field
  };

  const removeFromArray = (fieldName, index) => {
    const currentItems = getValues(fieldName);
    setValue(fieldName, currentItems.filter((_, i) => i !== index));
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/colleges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push('/admin/colleges');
      } else {
        alert('Failed to add college');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  // Predefined options for select fields
  const programTypes = [
    "Business School",
    "Engineering School",
    "Arts and Sciences",
    "Health Sciences"
  ];

  const facilityTypes = [
    "Student Union",
    "Recreational Center",
    "Library",
    "Residence Halls"
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Add New College</h1>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
        {['overview', 'admissions', 'events', 'research', 'sports'].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 capitalize ${activeTab === tab
              ? 'border-b-2 border-blue-500 font-medium text-blue-600 dark:text-blue-400'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">College Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">College Name*</label>
                <input
                  {...register('name', { required: 'College name is required' })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white py-2"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location*</label>
                <input
                  {...register('location', { required: 'Location is required' })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white py-2"
                />
                {errors.location && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.location.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Established Year*</label>
                <input
                  type="number"
                  {...register('establishedYear', { required: 'Established year is required' })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white py-2"
                />
                {errors.establishedYear && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.establishedYear.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ranked Nationally*</label>
                <input
                  type="number"
                  {...register('establishedYear', { required: 'Established year is required' })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white py-2"
                />
                {errors.establishedYear && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.establishedYear.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Website</label>
                <input
                  {...register('website')}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white py-2"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">One line intro about College/Uni*</label>
                <textarea
                  rows={2}
                  {...register('description', { required: 'Description is required' })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                {errors.description && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.description.message}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">College/Uni Description*</label>
                <textarea
                  rows={4}
                  {...register('description', { required: 'Description is required' })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                {errors.description && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.description.message}</p>}
              </div>
            </div>

            {/* Academic Programs */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Academic Programs</h3>
              <div className="space-y-4">
                {watch('academicPrograms')?.map((program, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{program.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{program.description}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromArray('academicPrograms', index)}
                      className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <select
                      {...register('newAcademicProgram.title')}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                      <option value="">Select program type</option>
                      {programTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <input
                      {...register('newAcademicProgram.description')}
                      placeholder="Program description"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newProgram = getValues('newAcademicProgram');
                    if (newProgram.title && newProgram.description) {
                      addToArray('academicPrograms', newProgram);
                      setValue('newAcademicProgram', { title: '', description: '' });
                    }
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                >
                  Add Academic Program
                </button>
              </div>
            </div>

            {/* Campus Facilities */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Campus Facilities</h3>
              <div className="space-y-4">
                {watch('campusFacilities')?.map((facility, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{facility.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{facility.description}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromArray('campusFacilities', index)}
                      className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <select
                      {...register('newCampusFacility.title')}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                      <option value="">Select facility type</option>
                      {facilityTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <input
                      {...register('newCampusFacility.description')}
                      placeholder="Facility description"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newFacility = getValues('newCampusFacility');
                    if (newFacility.title && newFacility.description) {
                      addToArray('campusFacilities', newFacility);
                      setValue('newCampusFacility', { title: '', description: '' });
                    }
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                >
                  Add Campus Facility
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Admissions Tab */}
        {activeTab === 'admissions' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Admissions Information</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Admission Process*</label>
              <textarea
                rows={4}
                {...register('admissionProcess', { required: 'Admission process is required' })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.admissionProcess && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.admissionProcess.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Requirements*</label>
              <textarea
                rows={4}
                {...register('requirements', { required: 'Requirements are required' })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.requirements && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.requirements.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Deadlines*</label>
                <textarea
                  rows={3}
                  {...register('deadlines', { required: 'Deadlines are required' })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                {errors.deadlines && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.deadlines.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tuition Fees*</label>
                <textarea
                  rows={3}
                  {...register('tuitionFees', { required: 'Tuition fees are required' })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                {errors.tuitionFees && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.tuitionFees.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Financial Aid Information*</label>
              <textarea
                rows={4}
                {...register('financialAid', { required: 'Financial aid info is required' })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.financialAid && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.financialAid.message}</p>}
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">College Events</h2>

            <div className="space-y-4">
              {watch('events')?.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{event.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{event.description}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{event.date}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromArray('events', index)}
                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Event Title</label>
                  <input
                    {...register('newEvent.title')}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Event Date</label>
                  <input
                    type="date"
                    {...register('newEvent.date')}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={() => {
                      const newEvent = getValues('newEvent');
                      if (newEvent.title && newEvent.date) {
                        addToArray('events', newEvent);
                        setValue('newEvent', { title: '', date: '', description: '' });
                      }
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                  >
                    Add Event
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Event Description</label>
                <textarea
                  rows={2}
                  {...register('newEvent.description')}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* Research Tab */}
        {activeTab === 'research' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Research Information</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Research Facilities*</label>
              <textarea
                rows={4}
                {...register('facilities', { required: 'Research facilities are required' })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.facilities && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.facilities.message}</p>}
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Research Areas</h3>
              <div className="space-y-4">
                {watch('researchAreas')?.map((area, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-gray-900 dark:text-white">{area}</span>
                    <button
                      type="button"
                      onClick={() => removeFromArray('researchAreas', index)}
                      className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="flex gap-4">
                  <input
                    {...register('newResearchArea')}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Add research area"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const area = getValues('newResearchArea');
                      if (area) {
                        addToArray('researchAreas', area);
                        setValue('newResearchArea', '');
                      }
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Publications</h3>
              <div className="space-y-4">
                {watch('publications')?.map((pub, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{pub.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{pub.authors}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{pub.date}</p>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">{pub.summary}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromArray('publications', index)}
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
                    <input
                      {...register('newPublication.title')}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
                    <input
                      type="date"
                      {...register('newPublication.date')}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Authors</label>
                    <input
                      {...register('newPublication.authors')}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Summary</label>
                  <textarea
                    rows={3}
                    {...register('newPublication.summary')}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newPub = getValues('newPublication');
                    if (newPub.title && newPub.authors) {
                      addToArray('publications', newPub);
                      setValue('newPublication', { title: '', authors: '', date: '', summary: '' });
                    }
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                >
                  Add Publication
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sports Tab */}
        {activeTab === 'sports' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sports Information</h2>

            {/* Sports Facilities */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sports Facilities*</label>
              <textarea
                rows={4}
                {...register('sportsFacilities', { required: 'Sports facilities description is required' })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Describe the sports facilities available at the college"
              />
              {errors.sportsFacilities && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.sportsFacilities.message}</p>}
            </div>

            {/* Sports Teams */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Sports Teams</h3>
              <div className="space-y-4">
                {watch('teams')?.map((team, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{team.name}</h4>
                        {team.coach && <p className="text-gray-600 dark:text-gray-400 text-sm">Coach: {team.coach}</p>}
                        {team.achievements && <p className="text-gray-600 dark:text-gray-400 text-sm">Achievements: {team.achievements}</p>}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromArray('teams', index)}
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Team Name</label>
                    <input
                      {...register('newTeam.name')}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="e.g. Basketball Team"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Coach</label>
                    <input
                      {...register('newTeam.coach')}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Coach's name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image URL</label>
                    <input
                      {...register('newTeam.image')}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Team image URL"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Achievements</label>
                  <textarea
                    rows={2}
                    {...register('newTeam.achievements')}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Notable achievements of the team"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newTeam = getValues('newTeam');
                    if (newTeam.name) {
                      addToArray('teams', newTeam);
                      setValue('newTeam', { name: '', coach: '', image: '', achievements: '' });
                    }
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                >
                  Add Sports Team
                </button>
              </div>
            </div>

            {/* Sports Achievements */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Sports Achievements</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Notable Achievements*</label>
                <textarea
                  rows={4}
                  {...register('achievements', { required: 'Achievements description is required' })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="List notable sports achievements of the college"
                />
                {errors.achievements && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.achievements.message}</p>}
              </div>
            </div>

            {/* Sports News */}
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Sports News</h3>
              <div className="space-y-4">
                {watch('sportsNews')?.map((news, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{news.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{news.description}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromArray('sportsNews', index)}
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">News Title</label>
                    <input
                      {...register('newSportsNews.title')}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="News headline"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                    <input
                      {...register('newSportsNews.category')}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="e.g. Latest News, Update"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                  <textarea
                    rows={3}
                    {...register('newSportsNews.description')}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="News description"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newNews = getValues('newSportsNews');
                    if (newNews.title && newNews.description) {
                      addToArray('sportsNews', newNews);
                      setValue('newSportsNews', { title: '', category: '', description: '' });
                    }
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                >
                  Add Sports News
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          {activeTab !== 'overview' && (
            <button
              type="button"
              onClick={() => {
                const tabs = ['overview', 'admissions', 'events', 'research', 'sports'];
                const currentIndex = tabs.indexOf(activeTab);
                if (currentIndex > 0) setActiveTab(tabs[currentIndex - 1]);
              }}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
            >
              Previous
            </button>
          )}

          {activeTab !== 'sports' ? (
            <button
              type="button"
              onClick={() => {
                const tabs = ['overview', 'admissions', 'events', 'research', 'sports'];
                const currentIndex = tabs.indexOf(activeTab);
                if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1]);
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800"
            >
              Submit College
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddCollegeForm;