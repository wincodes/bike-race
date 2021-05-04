class PagesController < ApplicationController

	require 'flickraw'

	FlickRaw.api_key="2334e4a1250f80799a0f82b39976dcc4"
	FlickRaw.shared_secret="14b0e680ded03db6"


	def about

	end

	def photo

		flickrApi


	end

	def location

	end

	private 


	def flickrApi

		#list   = flickr.photos.getRecent

		#id     = list[0].id
		#secret = list[0].secret
		#info = flickr.photos.getInfo :photo_id => id, :secret => secret

		#puts info.title           # => "PICT986"
		#puts info.dates.taken     # => "2006-07-06 15:16:18"

		#sizes = flickr.photos.getSizes :photo_id => id

		#original = sizes.find {|s| s.label == 'Original' }
		#puts original.width       # => "800" -- may fail if they have no original marked image

		# @img_url = FlickRaw.url_m(info)

		# @listRecent = flickr.photos.getRecent :per_page => 40
		@listRecent = flickr.photos.search :per_page => 40, :page => 4, :tags => "bikerace, BoulderBikeTour"
		#puts "list length #{@listRecent.length}"
		#puts "list length #{@listRecent.count}"
		#puts "list length #{@listRecent.to_json}"

		#@listRecent = @listRecent.paginate(:page => params[:page], :per_page => 30)


	end 
		 def get_image_info(image_id, image_secret) 
		 
		 	return 	
		 
		 end 


	def image_works 
		# get list (array) of recent image 
	return 
		flickr.photos.getRecent 
	end
	
end
