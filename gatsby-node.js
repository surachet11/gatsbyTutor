const path = require('path')
const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/users'

const urlAlbum =  'https://jsonplaceholder.typicode.com/albums?_limit=5'


exports.createPages = async ({ actions }) => {
    const { createPage } = actions

    try {
        const { data:users } = await axios.get(url)
        //const users = data
      

        createPage({
            path: '/users',
            component: path.resolve(__dirname, 'src', 'templates', 'users.jsx'),
            context: {
                user: users
            }
        })
        users.forEach(each => {
            createPage({
                path: `/users/${each.username.toLowerCase()}`,
                component: path.resolve(__dirname, 'src', 'templates', 'user.jsx'),
                context: {
                    user: each

                }
            })
        });

        const { data: albums } = await axios('https://jsonplaceholder.typicode.com/albums?_limit=5')

        createPage({
                path:'/albums',
                component:path.resolve(__dirname,'src','templates','albums.jsx'),
                context:{
                    albums:albums,
                }
        })

        albums.forEach(each => {
            createPage({
                path:`/albums/${each.id}`,
                component: path.resolve(__dirname, 'src', 'templates', 'album.jsx'),
                context: {
                    album: each
                }
            })
        })


    } catch (err) {
        return Promise.reject(err)

    }


    const people = ['John','Jack','Mike']

    createPage({
        path: '/foo',
        component: path.resolve(__dirname, 'src', 'templates', 'people.jsx'),
        context: {
            people: people
        }
    })
}
