Git Workflow for Pop-a-nola
===========================
Basic principles:
- Master is always deployable  
- User stories and testing always done in a branch  
- Branch names are descriptive  
- Commit messages are informative  
- Add pull requests with @mentions for the team
- 2 people review and approve the pull request  
- Approved PR's can be merged with master 

Git Workflow for Pop-a-nola
===========================

    $ git clone https://github.com/velvetsnowman/pop-a-nola.git

You're cloning the main repository - be careful! We're going to enforce a "no committing to master directly" rule, so no committing directly to master, please.

Short Version
-------------

When you want to work on something, make a new branch for your feature. Once you've implemented your thing, commit it to that local branch. Then, push that branch to the GitHub remote and make a pull request.

Long, Detailed Version with UNIX commands
-----------------------------------------

Checkout a branch for your feature before doing **anything**:

    $ git checkout -b my-awesome-feature

..work on things in your favourite text $EDITOR..

    $ git add [files]
    $ git commit -m 'commit message'

with a sensible commit message. Your commit is now on your local repository.

To push it to the remote repository (so don't do git push origin master), run

    $ git push origin my-awesome-feature

This will, by default, create a my-awesome-feature branch on the origin repository, ie. the repository on GitHub.

You should now be able to see your branch in https://github.com/velvetsnowman/pop-a-nola.git/branches. 
Click on your branch name. Then, click the "Pull Request" button, either on the top right of the screen, or in the center of the page under the label "Your recently pushed branches:".
Click the Send Pull request button. Await someone's code review.

To review, visit the main page of the repository after pulling: 
You should see a "Pull Request" button near the middle of the page.

Reviewing Code
--------------

    As a Reviewer,
    I want to see people's code,
    So that I can accept it and they can move on with life.

Visit the URL in the email you received and go to the person's pull request.
If you like-stamp the code, and have judged it suitable, press the big green Merge button (hint: it's not red). This will put that person's code in the master branch. If you get to this point, all is right with the world and the 日 continues to shine brightly.

**Help! There is no big green button, only a gray bar saying "This pull request cannot be automatically merged."**

No, you didn't do anything wrong. The file(s) that this pull request modifies was/were updated in the meantime. To avoid a conflict on the remote, GitHub won't let you automatically merge into master.

This can be fixed, presumably but not necessarily, by the author of the commit by merging the origin's master branch into the feature branch.

As a person-who-wants-to-fix-the-error,

    $ git fetch origin

to make sure you download all of the important stuff.

If you're not already on the feature branch,

    $ git checkout my-awesome-feature

Then, run

    $ git merge origin/master

to perform the merge. You're expecting to see something like the following _example_ output:

    Auto-merging Gemfile
    CONFLICT (content): Merge conflict in Gemfile

Fix up the files manually in your editor, and commit the result again:

    $ git add .
    $ git commit -m 'commit message'

Then, push this commit to the remote my-awesome-feature branch using the same command as earlier:

    $ git push origin my-awesome-feature

Get your reviewer to look at it again. Lather, Rinse, Repeat...


Cool workflow mostly nicked from: [here](https://gist.github.com/seshness/3943237#file-howtosharedrepomodelongithub-md)
