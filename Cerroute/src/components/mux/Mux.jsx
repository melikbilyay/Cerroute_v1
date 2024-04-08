import MuxPlayer from "@mux/mux-player-react";
import "./Mux.css"
export default function Mux() {
    return (
        <MuxPlayer
            streamType="on-demand"
            playbackId="55pUz3LTgBmNjba4EBXbKcE1oUW447Lwl1N4ItNjsPw"
            metadataVideoTitle="Placeholder (optional)"
            metadataViewerUserId="Placeholder (optional)"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
            autoplay="false"
        />
    );
}
