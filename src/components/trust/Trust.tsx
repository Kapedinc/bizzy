import { useEffect, useState, useRef } from 'react';
import { scroller } from 'react-scroll';

const Trust: React.FC = () => {
  const [allRevealed, setAllRevealed] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const paragraphs = document.querySelectorAll('.trust-paragraph');
    let spans: HTMLElement[] = [];

    paragraphs.forEach((paragraph) => {
      let htmlString = '';
      let pArray = paragraph.textContent?.split('') || [];
      for (let i = 0; i < pArray.length; i++) {
        htmlString += `<span class="trust-span">${pArray[i]}</span>`;
      }
      paragraph.innerHTML = htmlString;
    });

    spans = Array.from(document.querySelectorAll('.trust-span'));

    function revealSpans() {
      spans.forEach((span) => {
        const rect = span.parentElement?.getBoundingClientRect();
        if (rect && rect.top < window.innerHeight / 2) {
          let { left, top } = span.getBoundingClientRect();
          top = top - window.innerHeight * 0.1;
          let opacityValue = Math.max(0.1, 1 - (top * 0.01 + left * 0.001));
          opacityValue = Math.min(opacityValue, 1);
          span.style.opacity = opacityValue.toFixed(3);
        }
      });

      const allRevealed = spans.every(
        (span) => parseFloat(span.style.opacity) === 1
      );
      if (allRevealed) {
        setAllRevealed(true);
      }
    }

    window.addEventListener('scroll', revealSpans);
    revealSpans();

    return () => {
      window.removeEventListener('scroll', revealSpans);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (allRevealed && inView) {
      scroller.scrollTo('next-section', {
        duration: 1500,
        delay: 100,
        smooth: 'easeInOutQuart',
      });
    }
  }, [allRevealed, inView]);

  return (
    <div className="section -section wf-section">
      <div ref={sectionRef} className={`trust-container w-full min-h-screen bg-[#161616] text-white ${inView && !allRevealed ? 'fixed top-0 left-0' : ''}`}>
        <header className="relative h-20 flex items-center px-[5%]">
          {/* Add header content here if needed */}
        </header>
        <p className="trust-paragraph mb-16 text-[clamp(20px,5vw,90px)] px-[30%]">
          Here, your financial transactions reach a new echelon, enabling you to pay every invoice with cryptocurrency, regardless of the merchant's preferences. Your dedication to timely payments is honored with valuable points, enhancing your financial standing.
        </p>
      </div>
      <div id="next-section" className="min-h-screen">
        {/* The content of the next section */}
      </div>
    </div>
  );
};

export default Trust;
