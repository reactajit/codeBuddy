// level {2}

async function getUsers() {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
  
     const [user, Profile,p] = doc[0,1,2]

    const {user : user, profile :Profile, posts : P} = userProfile;
  
    return userProfile;
  }
