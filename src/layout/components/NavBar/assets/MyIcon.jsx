export const MyIcon = ({ active }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={active ? 'var(--jp-button-default-color)' : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11.7097"
        cy="7.64516"
        r="3.89516"
        stroke={
          active ? 'var(--jp-icon-stroke-active-primary-color)' : '#8C9AB8'
        }
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M3.58388 17.4423C4.34158 15.1332 6.73731 14.0322 9.16758 14.0322H14.2518C16.682 14.0322 19.0778 15.1332 19.8355 17.4423C20.0844 18.2009 20.2858 19.0621 20.3729 20.0007C20.4239 20.5506 19.9716 21 19.4194 21H4C3.44771 21 2.99548 20.5506 3.04647 20.0007C3.1335 19.0621 3.33495 18.2009 3.58388 17.4423Z"
        stroke={
          active ? 'var(--jp-icon-stroke-active-primary-color)' : '#8C9AB8'
        }
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
