import { Accordion, AccordionDetails, AccordionSummary, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function AccordionComponent() {
    return (
        <div className='space-y-4 max-w-[630px] mx-auto py-16'>
            <Accordion sx={{ bgcolor: "#1376F8", borderRadius: 2, color: "#fff", boxShadow: "none" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        fontSize: 18,
                        fontWeight: "500",
                        letterSpacing: 0.2,

                    }}
                >
                    Can i See who reads My email campaigns
                </AccordionSummary>
                <Divider orientation='horizontal' sx={{ bgcolor: "#fff" }} />
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quidem soluta voluptatum sint quae nihil sed tenetur molestiae, aspernatur praesentium numquam, minima ducimus inventore nemo minus? Eveniet nisi neque possimus impedit laborum, in ducimus repellendus beatae ut fugiat minus magnam aliquid porro, dolore aut explicabo laboriosam optio amet voluptate labore!
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: 2, boxShadow: "none" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        fontSize: 18,
                        fontWeight: "500",
                        letterSpacing: 0.2
                    }}
                >
                    Do you offer non-profit discounts?
                </AccordionSummary>
                <Divider orientation='horizontal' sx={{ bgcolor: "#fff" }} />
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quidem soluta voluptatum sint quae nihil sed tenetur molestiae, aspernatur praesentium numquam, minima ducimus inventore nemo minus? Eveniet nisi neque possimus impedit laborum, in ducimus repellendus beatae ut fugiat minus magnam aliquid porro, dolore aut explicabo laboriosam optio amet voluptate labore!
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: 2, boxShadow: "none" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        fontSize: 18,
                        fontWeight: "500",
                        letterSpacing: 0.2
                    }}
                >
                    Can i See who reads my email campaigns?
                </AccordionSummary>
                <Divider orientation='horizontal' sx={{ bgcolor: "#fff" }} />
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quidem soluta voluptatum sint quae nihil sed tenetur molestiae, aspernatur praesentium numquam, minima ducimus inventore nemo minus? Eveniet nisi neque possimus impedit laborum, in ducimus repellendus beatae ut fugiat minus magnam aliquid porro, dolore aut explicabo laboriosam optio amet voluptate labore!
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: 2, boxShadow: "none" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        fontSize: 18,
                        fontWeight: "500",
                        letterSpacing: 0.2
                    }}
                >
                    Do you offer non-profit discounts?
                </AccordionSummary>
                <Divider orientation='horizontal' sx={{ bgcolor: "#fff" }} />
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quidem soluta voluptatum sint quae nihil sed tenetur molestiae, aspernatur praesentium numquam, minima ducimus inventore nemo minus? Eveniet nisi neque possimus impedit laborum, in ducimus repellendus beatae ut fugiat minus magnam aliquid porro, dolore aut explicabo laboriosam optio amet voluptate labore!
                </AccordionDetails>
            </Accordion>
        </div>

    );
}