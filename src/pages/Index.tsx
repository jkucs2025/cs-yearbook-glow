
import React, { useEffect } from 'react';
import YearbookHeader from '@/components/YearbookHeader';
import StudentGallery from '@/components/StudentGallery';
import Timeline from '@/components/Timeline';
import YearbookFooter from '@/components/YearbookFooter';
import CodeParticles from '@/components/CodeParticles';

const Index = () => {
  useEffect(() => {
    // Set document title
    document.title = "CS Yearbook 2025";
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== null) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Interactive particle background */}
      <CodeParticles />
      
      {/* Main content */}
      <YearbookHeader />
      
      {/* Student gallery section */}
      <StudentGallery />
      
      {/* Timeline section */}
      <Timeline />
      
      {/* Codebase showcase section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 code-pattern opacity-20"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cs-purple to-accent inline-block">
            Our Code Speaks Volumes
          </h2>
          
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-lg text-muted-foreground mb-6">
              From algorithms to applications, our class has created an impressive portfolio of projects.
              Here's a glimpse of what we've built together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border text-left relative overflow-hidden glowing-border">
              <div className="absolute top-0 right-0 bg-cs-purple/10 text-cs-purple font-mono text-xs px-2 py-1 rounded-bl">
                Python
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">Machine Learning Research</h3>
              <pre className="bg-cs-dark p-4 rounded text-xs sm:text-sm overflow-x-auto">
                <code className="text-muted-foreground">
                  <span className="text-blue-400">import</span> tensorflow <span className="text-blue-400">as</span> tf<br/>
                  <span className="text-blue-400">from</span> tensorflow.keras.models <span className="text-blue-400">import</span> Sequential<br/>
                  <br/>
                  <span className="text-green-400"># Define the neural network</span><br/>
                  model = Sequential([<br/>
                  {'  '}tf.keras.layers.Dense(128, activation=<span className="text-yellow-300">'relu'</span>),<br/>
                  {'  '}tf.keras.layers.Dropout(0.2),<br/>
                  {'  '}tf.keras.layers.Dense(10, activation=<span className="text-yellow-300">'softmax'</span>)<br/>
                  ])
                </code>
              </pre>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border text-left relative overflow-hidden glowing-border">
              <div className="absolute top-0 right-0 bg-cs-purple/10 text-cs-purple font-mono text-xs px-2 py-1 rounded-bl">
                TypeScript
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">Web Application Development</h3>
              <pre className="bg-cs-dark p-4 rounded text-xs sm:text-sm overflow-x-auto">
                <code className="text-muted-foreground">
                  <span className="text-blue-400">interface</span> <span className="text-yellow-300">User</span> {'{'}<br/>
                  {'  '}id: <span className="text-blue-400">string</span>;<br/>
                  {'  '}name: <span className="text-blue-400">string</span>;<br/>
                  {'  '}email: <span className="text-blue-400">string</span>;<br/>
                  {'}'}<br/>
                  <br/>
                  <span className="text-blue-400">async function</span> <span className="text-yellow-300">fetchUserData</span>(userId: <span className="text-blue-400">string</span>) {'{'}<br/>
                  {'  '}<span className="text-blue-400">const</span> response = <span className="text-blue-400">await</span> fetch(<span className="text-green-400">`/api/users/${'{'}userId{'}'}`</span>);<br/>
                  {'  '}<span className="text-blue-400">return</span> response.json() <span className="text-blue-400">as</span> <span className="text-yellow-300">Promise</span>{'<'}<span className="text-yellow-300">User</span>{'>'};<br/>
                  {'}'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <YearbookFooter />
    </div>
  );
};

export default Index;
