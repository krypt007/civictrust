// src/components/ProjectForm.tsx

import React, { useState } from "react";
import Image from "next/image";

const ProjectForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    location: "",
    description: "",
    comments: "",
    images: [] as File[],
  });

  const [errors, setErrors] = useState({
    title: "",
    location: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = { title: "", location: "", description: "" };
    let isValid = true;

    if (!formValues.title) {
      newErrors.title = "Project title is required";
      isValid = false;
    }
    if (!formValues.location) {
      newErrors.location = "Location is required";
      isValid = false;
    }
    if (!formValues.description) {
      newErrors.description = "Description is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Handle form submission (e.g., API call)
    console.log("Form submitted:", formValues);

    setIsSubmitting(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFormValues((prev) => ({
        ...prev,
        images: Array.from(files),
      }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 space-y-6 bg-white shadow-md rounded-md"
    >
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Project Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formValues.title}
          onChange={handleInputChange}
          className={`mt-1 block w-full px-3 py-2 border ${
            errors.title ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.title && (
          <p className="text-red-500 text-xs mt-1">{errors.title}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Location:
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formValues.location}
          onChange={handleInputChange}
          className={`mt-1 block w-full px-3 py-2 border ${
            errors.location ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.location && (
          <p className="text-red-500 text-xs mt-1">{errors.location}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formValues.description}
          onChange={handleInputChange}
          className={`mt-1 block w-full px-3 py-2 border ${
            errors.description ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-xs mt-1">{errors.description}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="images"
          className="block text-sm font-medium text-gray-700"
        >
          Upload Images:
        </label>
        <input
          type="file"
          id="images"
          name="images"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        />
        {formValues.images.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-4">
            {formValues.images.map((file, index) => (
              <div key={index} className="relative w-24 h-24">
                <Image
                  src={URL.createObjectURL(file)}
                  alt={`Uploaded Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="comments"
          className="block text-sm font-medium text-gray-700"
        >
          Comments:
        </label>
        <textarea
          id="comments"
          name="comments"
          rows={3}
          value={formValues.comments}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
