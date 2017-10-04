const createElement = (string) => {
  const block = document.createElement(`div`);
  block.innerHTML = string;
  return block;
};

export default createElement;
