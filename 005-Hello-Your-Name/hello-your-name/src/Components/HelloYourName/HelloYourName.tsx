const HelloYourName = ({ yourName }: { yourName: string }) => (
  <>
    <h1> Hello, {yourName} !</h1>
  </>
);

export default HelloYourName;

/****** With interface sample *****

interface YourName {
  yourName: string;
}

const HelloYourName = ({ yourName }: YourName) => (
  <>
    <h1> Olá, {yourName}</h1>
  </>
);

export default HelloYourName;
 */
