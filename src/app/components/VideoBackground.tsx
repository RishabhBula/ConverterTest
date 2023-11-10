import React from 'react'

const VideoBackground = () => {
  return (
    <div className="video-background fixed top-0 left-0 w-full h-full object-cover">
    <video autoPlay loop muted>
      <source src="https://s3-figma-videos-production-sig.figma.com/video/962310623581735403/TEAM/d2cf/30d5/-a54b-401f-a464-27599ffabb4c?Expires=1700438400&Signature=LaIHuo1EzJaw4kEAXJ80INJkn2OEEdbxbETdOs2mOagrgdLIkXEXguc0EgqWkiHPOeG6BbibBSVk~NvRzQPs0ZuPcyHpl6qFtRMX1b4LCDu48fEWRG~KTcpgPP7a7HX1awNZvcTjWzw~ln64SOh9tZTNQPYiOg6HdEra3jqeMc87b8lso13fFl3o3p7nlnY0AUYEccR7QWk1oXNd1b9gJ~x4QmrE8XG6vYiq~ew205b1~JAaQHRWBGLb8byZwoWiXttoKTi0ZL69fAi0puJRk4vmJog~lIPKtuoORKBDad83uIljGPuAS7JE4c3aW24-O6OjDUskrAtotXufszkCuQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* Your other content goes here */}
  </div>
  )
}

export default VideoBackground
