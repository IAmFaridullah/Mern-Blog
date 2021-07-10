const reducer = (state , action) => {
    switch(action.type) {
        case 'SET_BLOGS':
            return {
                ...state, blogs : action.payload
            }
        case 'SET_SIDEBAR_BLOGS':
            return {
                ...state, sideBarBlogs : action.payload
            }
        case 'SET_COMMENTS':
            return {
                ...state, comments : action.payload
            }
        case 'SET_BLOGID':
            return {
                ...state, activeBlogId : action.payload
            }
        case 'CHANGE_STATE':
            return {
                ...state, updated : !state.updated
            }
        case 'ADD_NEW_BLOG':
            return {
                ...state, blogs : [...state.blogs , action.payload ]
            }
        case 'ADD_NEW_COMMENT':
            return {
                ...state, comments : [...state.comments, action.payload ]
            }

        default:
            return
    }
}

export default reducer;