/* eslint-disable import/no-anonymous-default-export */
const size = {
  xs: '470px',
  s: '576px',
  m: '768px',
  l: '992px',
};

const device = {
  xs: `min-width: ${size.xs}`,
  s: `min-width: ${size.s}`,
  m: `min-width: ${size.m}`,
  l: `min-width: ${size.l}`,
};
export default { size, device };
