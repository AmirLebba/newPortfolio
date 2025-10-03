export default function PersonalInterests() {
  const interests = [
    { emoji: '🚀', title: 'Open Source', text: 'Contributing to open source projects and building tools that help other developers.' },
    { emoji: '📚', title: 'Mentoring', text: 'Sharing knowledge through tech talks, workshops, and mentoring junior developers.' },
    { emoji: '🎨', title: 'UI/UX Design', text: 'Exploring the intersection of code and design to create beautiful, functional interfaces.' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">Beyond Code</h2>
          <p className="text-xl text-gray-400">What drives me outside of development</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((i) => (
            <div key={i.title} className="bg-gray-800 rounded-lg p-6 text-center scroll-reveal">
              <div className="text-4xl mb-4">{i.emoji}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{i.title}</h3>
              <p className="text-gray-400">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}