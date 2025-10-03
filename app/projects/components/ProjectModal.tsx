"use client";
import { useEffect } from "react";
import ScrollReveal from "@/app/util/ScrollReveal";
import { closeProjectModal } from "@/app/lib/projectModal";

export default function ProjectModal() {
  useEffect(() => {
    // attach ESC key & backdrop click
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && closeProjectModal();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      id="project-modal"
      className="project-modal"
      onClick={(e) => e.currentTarget === e.target && closeProjectModal()}
    >
      <div className="modal-content">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 id="modal-title" className="text-3xl font-bold text-white" />
            <button
              onClick={closeProjectModal}
              className="text-gray-400 hover:text-white text-2xl"
            >
              &times;
            </button>
          </div>
          <div id="modal-content" />
        </div>
      </div>
    </div>
  );
}
