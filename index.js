const handleData = () => {
  const datas = import.meta.glob('./my-data/*.js');
  console.log(datas);
};

const data = handleData('my-data');
console.log(data);
