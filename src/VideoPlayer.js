import React from 'react';
import { useParams } from 'react-router-dom';

const videos = [
  {
    id: 1,
    title: 'Video 1',
    url: 'https://nafisbd.com/vid.mp4',
    description: 'This is the first video.',
  },
  {
    id: 2,
    title: 'Video 2',
    url: 'http://10.16.100.213/iccftps13/iccftps13sasd4/Movies/English/Ant%20Man%20and%20the%20Wasp%20Quantumania%20(2023)%201080p%20DVDRip.mp4',
    description: 'This is the second video.',
  },
  {
    id: 3,
    title: 'Video 3',
    url: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4',
    description: 'This is the third video.',
  },
];

function VideoPlayer() {
  const { id } = useParams();
  const video = videos.find(video => video.id === parseInt(id));
  if (!video) {
    return <div>Video not found</div>;
  }
  return (
    <div>
      <h2>{video.title}</h2>
      <video src={video.url} controls />
      <p>{video.description}</p>
    </div>
  );
}

export default VideoPlayer;
