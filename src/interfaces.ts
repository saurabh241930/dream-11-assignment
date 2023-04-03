interface Celebrity {
  _id: number;
  first: string;
  last: string;
  dob: string;
  gender: string;
  email: string;
  picture: string;
  country: string;
  description: string;
  handleDeleteModalOpen:Function;
  idSelected:number;
  onAccordianSelect:Function
}

export default Celebrity