export function splitQuestion(question){
  if(!question.includes('humo')) return ["",""]
  const [questionText, questionCode] = question?.split("humo") ?? [
    "",
    "",
  ];
  const formattedCode = questionCode?.split("#$@")?.filter((code) => code)?.join("\n");

  return [questionText, formattedCode];
}