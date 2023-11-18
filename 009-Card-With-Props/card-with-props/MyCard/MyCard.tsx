// Import React and Material-UI components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Define the functional component
const MyCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a simple card example with Material-UI.
        </Typography>
      </CardContent>
    </Card>
  );
};

// Export the component
export default MyCard;
