document.addEventListener('DOMContentLoaded', function () {
  const elementsToAnimateLeft = document.querySelectorAll('.slide-to-left');
  const elementsToAnimateRight = document.querySelectorAll('.slide-to-right');
  const elementsToAnimateTop = document.querySelectorAll('.fade-in-top');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('slide-to-left')) {
            entry.target.classList.add('slide-to-left--active');
          } else if (entry.target.classList.contains('slide-to-right')) {
            entry.target.classList.add('slide-to-right--active');
          } else if (entry.target.classList.contains('fade-in-top')) {
            entry.target.classList.add('fade-in-top--active');
          }
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  elementsToAnimateLeft.forEach((element) => {
    observer.observe(element);
  });
  elementsToAnimateRight.forEach((element) => {
    observer.observe(element);
  });
  elementsToAnimateTop.forEach((element) => {
    observer.observe(element);
  });
});
