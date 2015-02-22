Tinyboard - A lightweight PHP imageboard.
==========================================

About
------------
Tinyboard is a free light-weight, fast, highly configurable and user-friendly
imageboard software package. It is written in PHP and has few dependencies.

The original repository by savetheinternet has not been approving pull requests
and is assumed to have lost their commitment to the Tinyboard project.

Requirements
------------
1.	PHP >= 5.3
2.	MySQL server
3.	[mbstring](http://www.php.net/manual/en/mbstring.installation.php) 
4.	[PHP GD](http://www.php.net/manual/en/intro.image.php)
5.	[PHP PDO](http://www.php.net/manual/en/intro.pdo.php)

We try to make sure Tinyboard is compatible with all major web servers and
operating systems. Tinyboard does not include an Apache ```.htaccess``` file nor does
it need one.

### Recommended
1.	MySQL server >= 5.5.3
2.	ImageMagick (command-line ImageMagick or GraphicsMagick preferred).
3.	[APC (Alternative PHP Cache)](http://php.net/manual/en/book.apc.php), [XCache](http://xcache.lighttpd.net/) or [Memcached](http://www.php.net/manual/en/intro.memcached.php)

Contributing
------------
You can contribute to Tinyboard by:
*	Developing patches/improvements/translations and using GitHub to submit pull requests
*	Providing feedback and suggestions
*	Writing/editing documentation

If you need help developing a patch, please join our IRC channel.

Installation
-------------
1.	Download and extract Tinyboard to your web directory or get the latest
	development version with:

        git clone git://github.com/Stewart-Companies/Tinyboard.git
	
2.	Navigate to ```install.php``` in your web browser and follow the
	prompts.
3.	Tinyboard should now be installed. Log in to ```mod.php``` with the
	default username and password combination: **admin / password**.

Please remember to change the administrator account password.

Support
--------
Tinyboard is still beta software -- there are bound to be bugs. If you find a
bug, please report it.

If you're unsure about how to enable or configure certain features, make
sure you have read the comments in ```inc/config.php```.

License
--------
See [LICENSE.md](http://github.com/Stewart-Companies/Tinyboard/blob/master/LICENSE.md).

