async function GetUsers(): Promise<user[]> {
  let data: user[] = await fetch("https://jsonplaceholder.typicode.com/users/").then((x) => x.json());
  console.log(data[0].address);
  return data;
}

// console.log(GetUsers());


async function GetUserById(id:number):Promise<user>{
  let data: user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((x) => x.json());
  console.log(data);
  
  return data;
}
GetUserById(1)
// console.log(GetUserById(1));

