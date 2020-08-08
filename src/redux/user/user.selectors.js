import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector([selectUser], user => {
    console.log("lol userchange happend")
    return (
        user.currentUser
    )
} )

