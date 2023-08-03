/*

Imagine you're on Facebook

On facebook, you have a list of friends
You're able to...

1. add a friend
2. remove a friend
3. list out all your friends
4. check whether you have a friend whose name is <NAME>
5. lets just say there's a maximum amount of friends you can have. lets say it's... 5

when we list out friends, i want it to have the output of...
1. Aaron
2. Shakelvia
3. Shamorr
4. Darell
5. Gev
6. There will never be a 6th one because we have max of 5

*/

// const friends = [];

// // arg1 = the name of the friend i want to add
// const addFriend = (name) => {
//   friends.push(name);
// }

// const removeFriend = (friendToRemove) => {
//   // if `friendToRemove`  is not in our friends list,
//   // we want to just console.log(`${friendToRemove} is not in our friends list`);
//   // firstly, we want to just check if they're in our friend's list

//   const userIsFriend = isFriend(friendToRemove);
  
//   if (!userIsFriend) {
//     console.log(`${friendToRemove} is not a friend`);
//   }

//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i] === friendToRemove) {
//       friends.splice(i, 1);
//       break;
//     }
//   }
// }

// const listOutFriends = () => {
//   for (let i = 0; i < friends.length; i++) {
//     const friendNumber = i + 1;
//     const name = friends[i];

//     console.log(`${friendNumber}. ${name}`);
//   }
// }

// // returns true or false
// const isFriend = (name) => {
//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i] === name) {
//       return true;
//     }
//   }

//   return false;
// }

// addFriend('Aaron');
// addFriend('Shakelvia');
// addFriend('Stanley');
// addFriend('Darell');
// addFriend('Tom');

// removeFriend('Jeffrey'); // since jeffrey isnt in our friends list, our program should just console.log("jeffrey is not in our friends list, so we cant delete him from there")

// listOutFriends();
/*
1. Aaron
2. Shakelvia
3. Darell
4. Tom
*/





// const array = ['hello', '123']
                          

// const func = () => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'hello') {
//       console.log('hello');
//       return;
//     }
  
//     console.log(array[i]);
//   }

//   console.log('another hello');
// }

// func();
/** 
break;
'hello'
'another hello'

return;
'hello'

continue;
'hello'
'123'
'another hello'

*/

// 1

// const queue = [`Babe I'm Gonna Leave You By Led Zeppelin`, 'Dont Let The Devil By Killer Mike', 'Protect Your Neck By Wu Tang Clan', 'Everlong By Foo Fighters'];


// const addSongs = (songName) => {
//     queue.push(songName);
// }

// addSongs('Random Song')


// const removeFirstSong = () => {
//     if (queue.length) {
//         return queue.shift();
//     } else {
//         console.log('Song queue is empty. Please add more songs');
//     }  
// }

// 3

// const removeSong = (songName) => {
//     const songInQueue = isSongInQueue(songName); // LOOKING THROUGH ARRAY TO FIND SONG IN QUEUE

//     if (!songInQueue) {
//         console.log(`${songName} is not in the queue`);
//     }
    // IF SONG IS IN QUEUE KEEP GOING DOWN 

    //FOR LOOP

//     for (let i = 0; i < queue.length; i++) {
//         if (songName === queue[i]) {
//             queue.splice(i, 1)
//             console.log(`Removed ${songName}`)
//         }
//     }

// }



// 4

// console.log(queue)


// const isSongInQueue = (songName) => {
    // Go through array of songs and check if the song is already in the queue
    // for (let i = 0; i < queue.length; i++) {
        // console.log(queue[i]);
        // if (songName === queue[i]) {
            // console.log('Song Already In Queue')
            // return true;
        // } else {
            // console.log('Song Not In Queue')
            // return false;
        // }
    // }
    // if not return false
    // return false;
// }

// isSongInQueue('Dont Let The Devil By Killer Mike')



// const viewQueue = () => {
//     for (let i = 0; i < queue.length; i++) {
//         console.log(`${i}:` + queue[i])
//     }
// }

// console.log(queue)
// console.log('================================')
// removeSong('Everlong By Foo Fighters')
// console.log(queue)


// const removeFriend = (friendToRemove) => {
//   // if `friendToRemove`  is not in our friends list,
//   // we want to just console.log(`${friendToRemove} is not in our friends list`);
//   // firstly, we want to just check if they're in our friend's list

//   const userIsFriend = isFriend(friendToRemove);
  
//   if (!userIsFriend) {
//     console.log(`${friendToRemove} is not a friend`);
//   }

//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i] === friendToRemove) {
//       friends.splice(i, 1);
//       break;
//     }
//   }
// }

//queue.push(songName);

const songQueue = [
    { name: 'I want it that way', artist: 'Backstreet boys', genre: 'AMAZING' },
    { name: 'Dreaming of you', artist: 'Selena', genre: 'AMAZING' },
    { name: 'Take on me', artist: 'a-ha', genre: 'AMAZING' },
  ];

const addSongToQueue =  (song) => {
    console.log(song);
}

// console.log(songQueue)


addSongToQueue({artist: 'Foo Fighters', name: 'Everlong', genre: 'Rock'})

// console.log(songQueue)


const removeFirstSongFromQueue = () => {
    const song = 'remove the first song from queue';
  
    return song;
}

const removeSongFromQueue = (song) => {
    const songIsInQueue = isSongInQueue(song);
  
    if (songIsInQueue) {
      // remove the song from queue
    } else {
      console.log(`${song} is not in the queue`)
    }
}

const printQueue = () => {

}

const isSongInQueue = (song) => {

}

addSongToQueue({
  name: 'I WANT IT THATTTT WAYYYY',
  artist: 'Backstreet boys',
  genre: 'awesome'
});
