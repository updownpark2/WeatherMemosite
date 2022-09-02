//배경화면이 랜덤으로 바뀔수 있게!
export default function Background({ goBack }) {
  const arr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  goBack(arr);
}
