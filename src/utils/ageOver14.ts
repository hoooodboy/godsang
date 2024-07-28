const ageOver14 = (date: Date | string | null | undefined, currentTime) => {
  if (!date) {
    return undefined;
  }

  const dob = new Date(date);

  // 현재 날짜로 Date 객체 생성
  const today = new Date(currentTime);

  // 현재 년도에서 생년월일의 년도를 뺌
  let age = today.getFullYear() - dob.getFullYear();

  // 생년월일이 현재 날짜보다 나중이면 나이를 1 빼줌
  if (today < new Date(today.getFullYear(), dob.getMonth(), dob.getDate())) {
    age--;
  }

  return age > 13;
};

export default ageOver14;
