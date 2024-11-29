import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Breadcrumb from '../Breadcrumb'

const Result = ({ successRate, cycles }) => {
  return (
    <div className="h-screen bg-zinc-900 overflow-hidden">
      {/* Breadcrumb */}
      <nav className="p-4 text-zinc-300">
        <div className="md:max-w-4xl md:mx-auto">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'IVF Success Rate Calculator', href: '/' },
              { label: 'Results', href: '' },
            ]}
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl content-center mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-medium">
              Your estimated IVF Success Rate is
            </h1>

            <div className="w-64 h-64 mx-auto">
              <CircularProgressbar
                value={successRate}
                text={`${successRate}%`}
                styles={buildStyles({
                  textSize: '24px',
                  pathColor: '#86efac',
                  textColor: '#ffffff',
                  trailColor: '#374151',
                })}
              />
            </div>

            <p className="text-xl text-center text-zinc-300">
              With {cycles} IVF Cycle{cycles > 1 ? 's' : ''}
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-3/4 relative md:top-[9rem]">
            <div className="relative">
              {/* Green Gradient Overlay */}
              <div className="absolute inset-0 rounded-full bg-radial-gradient from-green-800 via-transparent to-transparent scale-[1.5] md:scale-[2]" />
              <img
                src="https://s3-alpha-sig.figma.com/img/3083/cfdf/a3342bdeb14d22fce3f84a7131648fe0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m3rcPSzyYXFQ3av1UzjVwX~ywz9ut1Jmpzmx6Z~RWwUd~~r9UxNnyNl4R9JldCD4zDCW7Q2IeQvOvnDs6u4pyH3CTfoUnO5v492UL1iuyJt3I3zHG387QUApgjGytHwEVS51em2fW5HQXigaiOLgI6ldEf-XgFWD-AZPB6squ7fJ1sPU5SEgs04SJJgSlkJzl1Ka-Ed1OsDBqFXjBxAf7zZ~60XEh1fn~sDWw58OaB~z-10gRcakHkeVapNSDVELmye3t0JjF7zlsu5d9JV7LvBxi6ry6D-l1bYi0r8uWHVFccwd~tuvdXccvuZZNeoqnR6oiSRnQkxLHAzIzIkmVQ__"
                alt="Couple photo"
                className="rounded-lg grayscale w-screen h-auto md:scale-[1.3]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Button for Mobile */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#1E1E1E] block md:hidden">
          <button className="w-full bg-[#C15B5B] text-white py-3 px-6 rounded-lg">
            Start private consultation →
          </button>
        </div>
      </main>
    </div>
  );
};

export default Result;
