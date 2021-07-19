async function fetchGraphQL() {
    const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;
    const variables = {
        term: "react"
    }
    // Fetch data from GitHub's GraphQL API:
    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query topicsRelatedReact($term: String!) {
                topic(name: $term) {
                    name
                    relatedTopics {
                        name
                        stargazerCount
                        stargazers (first : 1) {
                            totalCount
                            edges {
                                node {
                                    name
                                }
                                cursor
                                starredAt
                            }
                            pageInfo {
                                endCursor
                                hasNextPage
                            }
                        }
                        relatedTopics {
                            name
                            stargazerCount
                            stargazers (first : 1) {
                                totalCount
                                edges {
                                    node {
                                        name
                                    }
                                    cursor
                                    starredAt
                                }
                                pageInfo {
                                    endCursor
                                    hasNextPage
                                }
                            }
                        }
                    }
                    stargazers {
                        totalCount
                    }
                    stargazerCount
                    viewerHasStarred
                }
            }`,
            variables
        }),
    });

    // Get the response as JSON
    return await response.json();
}

export default fetchGraphQL;