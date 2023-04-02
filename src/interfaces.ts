interface Celebrity {
  _id: string;
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
}

export default Celebrity