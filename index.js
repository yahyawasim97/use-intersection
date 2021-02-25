import { useEffect, useState } from 'react';

/**
 * Returns whether the given element is currently scrolled within the viewport.
 *
 * @param {Object} ref Reference to the element to observe
 * @param {Object} [options] IntersectionObserver options
 * @returns {boolean} Whether the element is within the viewport
 */
export default function useIntersection(ref, options) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const { current } = ref;
    if (!current) return undefined;

    const io = new IntersectionObserver(([{ isIntersecting }]) => {
      setVisible(isIntersecting);
    }, options);
    io.observe(current);

    return () => io.disconnect();
  }, [options, ref]);

  return isVisible;
}
