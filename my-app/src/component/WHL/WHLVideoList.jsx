import React from 'react';
import ShowVideoList from '../ShowVideoList/ShowVideoList';

function WHLVideoList({ page, videoList }) {
  return (
    <>
      {Array.isArray(videoList) &&
        videoList.map(m=> {
          return (
          <>
              <ShowVideoList videoId={m._id} />
              </>
          );
        })}
    </>
  );
}

export default WHLVideoList;
