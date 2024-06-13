import { Notifications } from '@mui/icons-material';
import { Badge, Box } from '@mui/material';

export function BadgeNotification(){
    return(
        <div className="flex gap-2 items-center">
            <Box
            sx={{
              backgroundColor: "#FFFAF1",
              color: "#ffab00",
              borderRadius: "5px",
              height: "50px",
              width: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Badge
          color="error"
          variant="dot"
          sx={{
            '& .MuiBadge-dot': {
              height: '4px',  
              minWidth: '4px',  
            }
          }}
        >
              <Notifications />
            </Badge>
          </Box>
        </div>
        
    )
}