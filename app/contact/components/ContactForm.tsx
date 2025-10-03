"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { submitContact } from "@/app/lib/contactUtils";
import ScrollReveal from "@/app/util/ScrollReveal";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  inquiryType: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export default function ContactForm() {
  const [files, setFiles] = useState<File[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await submitContact({ ...data, files });
    reset();
    setFiles([]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    maxSize: 10 * 1024 * 1024,
    onDrop: (accepted) => setFiles((prev) => [...prev, ...accepted]),
  });

  const removeFile = (name: string) =>
    setFiles((prev) => prev.filter((f) => f.name !== name));

  return (
    <ScrollReveal>
      <div className="scroll-reveal">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
          Send a Message
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">First Name *</label>
              <input
                {...register("firstName", { required: "Required" })}
                className={`form-input ${errors.firstName ? "error" : ""}`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="form-label">Last Name *</label>
              <input
                {...register("lastName", { required: "Required" })}
                className={`form-input ${errors.lastName ? "error" : ""}`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="form-label">Email Address *</label>
            <input
              type="email"
              {...register("email", { required: "Required" })}
              className={`form-input ${errors.email ? "error" : ""}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="form-label">Phone Number</label>
            <input type="tel" {...register("phone")} className="form-input" />
          </div>

          <div>
            <label className="form-label">Inquiry Type *</label>
            <select
              {...register("inquiryType", { required: "Required" })}
              className={`form-input ${errors.inquiryType ? "error" : ""}`}
            >
              <option value="">Select an option</option>
              <option value="freelance">Freelance Project</option>
              <option value="fulltime">Full-time Position</option>
              <option value="collaboration">Collaboration</option>
              <option value="consultation">Consultation</option>
              <option value="other">Other</option>
            </select>
            {errors.inquiryType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.inquiryType.message}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Project Budget</label>
              <select {...register("budget")} className="form-input">
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-30k">$15,000 - $30,000</option>
                <option value="30k-50k">$30,000 - $50,000</option>
                <option value="over-50k">Over $50,000</option>
              </select>
            </div>

            <div>
              <label className="form-label">Project Timeline</label>
              <select {...register("timeline")} className="form-input">
                <option value="">Select timeline</option>
                <option value="asap">ASAP</option>
                <option value="1-month">Within 1 month</option>
                <option value="3-months">Within 3 months</option>
                <option value="6-months">Within 6 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div>
            <label className="form-label">Project Details *</label>
            <textarea
              {...register("message", { required: "Required" })}
              rows={6}
              className={`form-input resize-none ${
                errors.message ? "error" : ""
              }`}
              placeholder="Tell me about your project, goals, and any specific requirements..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div>
            <label className="form-label">Attachments</label>
            <div {...getRootProps({ className: "file-upload" })}>
              <input {...getInputProps()} />
              <div className="text-gray-400">
                <p className="mb-2">
                  📎 Drag and drop files here or click to browse
                </p>
                <p className="text-sm">
                  Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB each)
                </p>
              </div>
              {files.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-white font-semibold mb-2">
                    Uploaded Files:
                  </h4>
                  <ul className="space-y-1">
                    {files.map((f) => (
                      <li
                        key={f.name}
                        className="flex items-center justify-between text-sm text-gray-400 bg-dark-gray p-2 rounded"
                      >
                        <span>
                          {f.name} ({(f.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFile(f.name)}
                          className="text-red-400 hover:text-red-300"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </ScrollReveal>
  );
}
