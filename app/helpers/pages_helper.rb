module PagesHelper

	# url_s : Square
	# url_q : Large Square
	# url_t : Thumbnail
	# url_m : Small
	# url_n : Small 320
	# url   : Medium
	# url_z : Medium 640
	# url_c : Medium 800
	# url_b : Large
	# url_o : Original

	 require 'flickraw' 
	 # FlickRaw.api_key="e3fa61c9cc676f27add3ff3f07567b1a" 
	 # FlickRaw.shared_secret="f5e0518cee1e7d7d" 
	 def get_image_info(image_id, image_secret) 
	 	
	 	return set_image_info(image_id, image_secret) 
	 
	 end 

	 def get_image_url(image_info) 

	 	return FlickRaw.url_m(image_info) 

	 end 

	private 

	 	def set_image_info(id, secret) 

	 		_info = nil 

	 		_info = flickr.photos.getInfo :photo_id => id, :secret => secret
	 		
	 		# return the result 
	 		
	 		return _info 
	 	
	 	end 

end
