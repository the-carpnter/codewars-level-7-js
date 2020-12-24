const remainder = (D, d) => {
  return D < d ? D : remainder(D - d, d);
}
