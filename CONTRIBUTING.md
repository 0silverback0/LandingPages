# Contribution Guidelines

Thank you for considering contributing to our project! Your contributions help make this project better and provide valuable learning experiences for developers. To ensure a smooth and productive contribution process, please review the following guidelines.

1. Add your project, be sure to optimize for all devices

2. Add a link in your projects navigation home tab back to the LandingPages/index.html

3. Add your project name, github profile link, github name, project directory ```example landingPages/index.html``` and link to your project in the root index.html
  ```html 
      <div class="col-12 col-lg-4 col-md-6">
                    <div class="project bg-black bg-opacity-75 p-4 rounded-5">
                        <p class="fs-5 fw-medium text-white">YOUR PROJECT NAME</p>
                        <p class="d-flex align-items-center gap-2">
                            <i class="fa-brands fa-github text-white"></i>
                            <a href="YOUR GITHUB PROFILE" target="_blank" 
                                class="text-decoration-none text-white">YOUR NAME</a>
                        </p>
                        <div class="w-100 d-flex align-items-center justify-content-end">
                            <button
                                class="d-inline-flex flex-row align-items-center gap-2 px-4 py-3 rounded-pill bg-transparent border border-white">
                                <a href="./YOUR PROJECT DIRECTORY" target="_blank"
                                    class="text-decoration-none text-white d-flex align-items-center gap-2">
                                    <p class="fw-medium">View project</p>
                                    <i class="fa-solid fa-eye"></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
```


## Hacktoberfest Eligibility

To be eligible for Hacktoberfest, contributions must adhere to the following guidelines:

1. Contributions must be related to creating or improving landing pages.

2. All contributions must be meaningful and adhere to our project's quality standards.

3. Contributions should not be trivial, such as typo fixes, styling changes, or minor adjustments. They should provide substantial value.

## Getting Started

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account 

 
2.  [Clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.

```
 git clone https://github.com/your-username/your-forked-repo.git
```

3. After cloning you can make changes in your device locally. After making changes create a pull request.

 
4. To create a new branch locally, open your terminal/command prompt and navigate to your Git project directory.

``` 
git checkout -b new-branch-name
```

5.Make your code changes within this new branch. Commit your changes as you normally would with Git:

```
git add .
git commit -m "Your commit message"
```
6.To push the new branch to the remote repository (like GitHub), use:
```
git push origin new-branch-name
```


## Submitting a Pull Request

1. Ensure that your code follows best practices and standards.

2. Provide a clear and concise description of your contribution in the pull request title and description. Mention the issue number if your contribution is related to a specific issue.

3. Make sure your pull request is labeled as "Hacktoberfest."

4. Sign your commits if you haven't already. You can do this by using the `-s` flag when committing, which adds a Signed-off-by line to the commit message.

```
 git commit -s -m "Your commit message"
```

5. Ensure that your contribution doesn't introduce any copyright violations, plagiarized content, or third-party assets without proper attribution.

6. Be responsive to any feedback and be ready to make changes if requested by the project maintainers.

## Code of Conduct

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you are expected to uphold the standards of behavior outlined in the code of conduct.

## Licensing

Your contributions are subject to the project's MIT License. By submitting a contribution, you agree to allow your work to be distributed under this license. Please read the [LICENSE](LICENSE) file for more details.

Thank you for contributing to our project! Your work is appreciated, and you're helping us create better landing pages and promote learning opportunities for developers.


