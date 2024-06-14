import { Notifications } from '@mui/icons-material';
import { Badge, Box } from '@mui/material';

export function BadgeNotification(){
    return(
        <div className="flex gap-4 items-center">
            <Box
            sx={{
              paddingRight: "10px",
              backgroundColor: "#FFFAF1",
              color: "#ffab00",
              borderRadius: "5px",
              height: "45px",
              width: "45px",
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