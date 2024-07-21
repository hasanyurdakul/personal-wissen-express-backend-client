import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function SitemapCard({ path }) {
  return (
    <Card className=" flex items-center justify-between w-48">
      <CardContent className="w-1/3">
        <Typography variant="h6" component="div">
          {path}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={path}>
          <Button
            size="small"
            variant="contained"
            onClick={() => toast.success(`Viewing ${path}`)}
          >
            <small>view</small>
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default SitemapCard;
