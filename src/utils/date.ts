function converterDataParaFormatoISO(data: string) {
  const [day, month, year] = data.split("/");
  const date = `${year}-${month}-${day}`;
  
  return date;
}

export { converterDataParaFormatoISO };