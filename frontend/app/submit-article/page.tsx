"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // For navigating back

export default function SubmitArticle() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    journal: "",
    year: "",
    doi: "",
    bibtexFile: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter(); // Hook to handle navigation

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // For now, we'll just log the data. Later, you can integrate with MongoDB.
    console.log(formData);
  };

  return (
    <div className="submit-article-container">
      <h1>Submit Article</h1>

      {isSubmitted ? (
        <p className="confirmation-message">Your article has been successfully submitted!</p>
      ) : (
        <form onSubmit={handleSubmit} className="submit-article-form">
          {/* Title */}
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Author */}
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>

          {/* Journal */}
          <div>
            <label htmlFor="journal">Journal:</label>
            <input
              type="text"
              id="journal"
              name="journal"
              value={formData.journal}
              onChange={handleChange}
              required
            />
          </div>

          {/* Year */}
          <div>
            <label htmlFor="year">Year:</label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>

          {/* DOI */}
          <div>
            <label htmlFor="doi">DOI:</label>
            <input
              type="text"
              id="doi"
              name="doi"
              value={formData.doi}
              onChange={handleChange}
              required
            />
          </div>

          {/* BibTeX File Upload */}
          <div>
            <label htmlFor="bibtexFile">Upload BibTeX File:</label>
            <input
              type="file"
              id="bibtexFile"
              accept=".bib"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit">Submit Article</button>
          </div>
        </form>
      )}

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={() => router.back()} className="back-button">Back</button>
      </div>
    </div>
  );
}
